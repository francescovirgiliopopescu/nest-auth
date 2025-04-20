import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userRepository: Repository<User> ,private userService: UserService, private jwtService: JwtService, ) {}

    async signIn( email: string, pass: string) : Promise<{ message: string,  access_token: string }> {
        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            throw new BadRequestException("Unregistered user, please sign up first!!");
        }

        const isPasswordValid = await bcrypt.compare(pass, user.password);
        if (!isPasswordValid) {
            throw new BadRequestException("password is incorrect!!");
        }

        const payload = { sub: user.id, email: user.email, username: user.username };
        const token = this.jwtService.sign(payload);
        
        return { message: 'Login Successfully', access_token: token }
    }
    async signUp(username: string, email: string, pass: string) {
        const userExsits = await this.userRepository.findOneBy({ email });
        
        if (userExsits) {
            throw new BadRequestException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(pass, 10);
        const newUser = this.userRepository.create({
            username, 
            email,
            password: hashedPassword
        })

        await this.userRepository.save(newUser);
        return { message: 'User created successfully' };
    }
}
