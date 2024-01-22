import { Controller, Get, Post, Patch, Delete, Query, Param, Req } from "@nestjs/common"
import { Request } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getHello() {
        return {
                    name: 'sakura',
                    designation: 'doctor',
                    class: 7
                }
    }

    // @Get('/good-bye')
    // getGoodbye(): string {
    //     return 'Goodbye World!';
    // }

    @Get('/:userId')
    getUserId(@Param() params: {userId : number}){
        return params.userId;
    }

    // @Get('/')
    // getUserDetails(@Query() query: {userId: number, name: string, age:number}) {
    //     console.log(query)
    //     return query;
    // }
      
    @Patch('/update/:userId')
    updateUser(@Param() params:{userId:number}, @Req() req: Request){
        console.log(params)
        console.log(req.body)
        return params
    }

    @Delete('/delete/:userId')
    deleteUser(@Param() params: {userId: number}) {
        console.log(params)
        return params.userId;
    }

    @Post()
    getUser(@Req() req:Request) {
        console.log(req.body)
        return req.body;
    }

    @Get()
    getUserObj() {
        return {
            name: 'user',
            class: 'first ',
            song: 'again'
        }
    } 
}