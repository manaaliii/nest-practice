import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    get(): Promise<User []>{
        return this.userRepository.find();
    }   

    show(id:number){
        return this.userRepository.findOne({where :{id}});
    }

    create(createUserDto: CreateUserDto){
        return this.userRepository.save(createUserDto);
    }

    update(userId: number,updateUserDto: UpdateUserDto){
        return this.userRepository.update(userId,updateUserDto);
    }

    delete(userId: number){
        return this.userRepository.delete(userId);
    }

}
