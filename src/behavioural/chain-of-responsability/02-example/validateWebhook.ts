import { MobsimRequest } from "./chainOfResponsability/mobsimRequest"
import { OtherRequest } from "./chainOfResponsability/otherRequest"
import { TwilioRequest } from "./chainOfResponsability/twilioRequest"
import { Request } from "./request"

export class ValidateWebhook {
    Handle(request: any){
        const data = new Request(request)
        const validate = new MobsimRequest()

        validate
            .nextHandler( new TwilioRequest())
            .nextHandler( new OtherRequest())

        return validate.handle(data)  
    }
}