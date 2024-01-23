import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService:AuthService){
        // by default this strategy expects to find credentials in username and password, however
        // we are using email and password, so we have to tell the strategy to look for the credentials in email and password
        super({usernameField: "email"});
    }

    async validate(email: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(email, password);
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}