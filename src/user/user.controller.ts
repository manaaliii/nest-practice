import { Controller, Get, Post, Patch, Delete, Query, Param, Req, Body, ParseIntPipe } from "@nestjs/common"
// import { Request } from '@nestjs/common';
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    // dependency injection
    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.get();
    }
       
    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId:number){
        return this.userService.show(userId);
    }


    @Post()
    createUser(@Body() createUserDto:CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Patch('/:userId')
    updateUser(@Param('userId', ParseIntPipe) userId, @Body() updateUserDto:UpdateUserDto) {
       return this.userService.update(userId, updateUserDto)
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId) {
        return this.userService.delete(userId)
    }

    // @Patch('/:userId')
    // updateUser(@Param() params:{userId:number}, @Body() updateUserDto:UpdateUserDto) {
    //    return this.userService.update(params, updateUserDto)
    // }

    // @Delete('/:userId')
    // deleteUser(@Param() params: {userId: number}, @Body() body:unknown) {
    //     console.log(params)
    //     return this.userService.delete(params, body)
    // }
    
    // @Get('/:userId')
    // getUser(@Param() param: {userId : number}){
    //     return this.userService.show(param);
    // }

    // @Post()
    // createUser(@Req() req:Request) {
    //     return this.userService.create(req);
    // }

    // @Patch('/:userId')
    // updateUser(@Param() params:{userId:number}, @Req() req: Request){
    //    return this.userService.update(params, req)
    // }

    // @Delete('/:userId')
    // deleteUser(@Param() params: {userId: number}, @Req() req: Request) {
    //     console.log(params)
    //     return this.userService.delete(params, req)
    // }


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