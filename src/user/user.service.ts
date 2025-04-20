import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

export type User = any;

@Injectable()
export class UserService {
    // private readonly users = [
    //     {
    //         userId : 1,
    //         username : "john",
    //         password : "changeme",
    //     },
    //     {
    //         userId : 2,
    //         username : "maria",
    //         password : "guess",
    //     }
    // ]

    constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: UserEntity = new UserEntity();
    // user.name = createUserDto.name;
    // user.age = createUserDto.age;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    // user.gender = createUserDto.gender;

    return this.userRepository.save(user);
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  // updateUser(id: number, updateUserDto: UpdateUser)

    // async findOne(username: string) :Promise<User | undefined> {
    //     return this.users.find(user => user.username === username)
    // }
}
