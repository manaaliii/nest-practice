import { Controller, Get, Post, Patch, Delete, Query, Param, Req } from "@nestjs/common"
import { Request } from '@nestjs/common';
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    // dependency injection
    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.get();
    }

    @Get('/:userId')
    getUser(@Param() param: {userId : number}){
        return this.userService.show(param);
    }

    @Patch('/:userId')
    updateUser(@Param() params:{userId:number}, @Req() req: Request){
       return this.userService.update(params, req)
    }

    @Delete('/:userId')
    deleteUser(@Param() params: {userId: number}, @Req() req: Request) {
        console.log(params)
        return this.userService.delete(params, req)
    }

    @Post()
    createUser(@Req() req:Request) {
        return this.userService.create(req);
    }

    // @Get()
    // getUserObj() {
    //     return {
    //         name: 'user',
    //         class: 'first ',
    //         song: 'again'
    //     }
    // } 


    
    // @Get('/')
    // getUserDetails(@Query() query: {userId: number, name: string, age:number}) {
    //     console.log(query)
    //     return query;
    // }
      
    // @Get('/good-bye')
    // getGoodbye(): string {
    //     return 'Goodbye World!';
    // }
}