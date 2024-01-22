import { Injectable, ParamData } from '@nestjs/common';

@Injectable()
export class UserService {
    get(){
        return {
            name: 'sakura uchiha',
            designation: 'doctor',
            class: 7
        }
    }

    show(param:{userId:number}){
        return param
    }

    create(req: Request){
        return req.body
    }

    update(params: {userId: number},req: Request){
        return{method:'PATCH',params,body: req.body}
    }

    delete(params: {userId: number},req: Request){
        return{method:'DELETE',params,body: req.body}
    }

}
