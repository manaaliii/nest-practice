import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()   
    name:string;

    @Column() 
    email:string;

    @Column() 
    password:string;

    @Column() 
    age:number;
}