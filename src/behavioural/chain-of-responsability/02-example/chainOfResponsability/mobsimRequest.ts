import { Request } from "../request";
import { BaseRequest } from "./baseRequest";

export class MobsimRequest extends BaseRequest{
    handle(data: Request): Request{
        const { body } = data       
         if(body.code === 'webhookMobsim'){
            console.log('Mobsim Request')
            return {
                body: {
                    ...body
                },
                provider: 'mobsim',
                isValid: true
            }
        }      
        return super.handle(data)
    }   
}