import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    
    constructor(private userService: UserService){}
    async validateUser(email:string, password:string){
        const user = await this.userService.findByEmail(email);
        if(user){
            if(user.password === password){
                return user;
            }
            else{
                return 'password didn\'t match'
            }
        }
        return 'no user found';
    }
}
