import { Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { Request } from '@nestjs/common';

@Controller()
class AppController {
    @Get()
    getHello() {
        return {
                    name: 'user',
                    class: 'first ',
                    song: 'gurenge'
                }
    }
    @Get('/good-bye')
    getGoodbye(): string {
        return 'Goodbye World!';
    }

    // @Get('/:userId')
    // getUserId(@Param() params: {userId : number}){
    //     return params.userId;
    // }

    @Get('/user')
    getUserDetails(@Query() query: {userId: number, name: string, age:number}) {
        console.log(query)
        return query;

    }
      
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
    getUser(@Req() req) {
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
export { AppController };