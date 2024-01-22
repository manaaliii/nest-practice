import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./user/entity/user.entity";


@Module({
    controllers: [AppController],
    providers: [],
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'mydb',
            entities: [User],
            synchronize: true,
          }),UserModule]
})

export class AppModule{};