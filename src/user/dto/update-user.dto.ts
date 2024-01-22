import { IsString, IsEmail, Matches, IsNumber } from "class-validator";

export class UpdateUserDto{
    @IsString()
    @Matches(/^[a-zA-Z]+$/, { message: 'Name should contain only alphabets' })
    name:string;

    // @IsEmail()
    // email:string;

    @IsNumber()
    age:number;

    // @IsString()
    // @Matches(/^[a-zA-Z]+$/, { message: 'Designation should contain only alphabets' })
    // designation:string;
}