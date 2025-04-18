import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

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
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

    // async findOne(username: string) :Promise<User | undefined> {
    //     return this.users.find(user => user.username === username)
    // }
}
