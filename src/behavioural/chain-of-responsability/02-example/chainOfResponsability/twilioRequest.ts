import { Request } from "../request";
import { BaseRequest } from "./baseRequest";

export class TwilioRequest extends BaseRequest{
    handle(data: Request): Request{
        const { body, headers } = data     
        if(headers['x-twilio-signature']){
            console.log('Twilio Request')
            return {
                body: {
                    ...body
                },
                provider: 'twilio',
                isValid: true
            }
        }
        
        return super.handle(data)
    }    
}