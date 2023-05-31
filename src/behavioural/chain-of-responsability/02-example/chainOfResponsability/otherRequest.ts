import { Request } from "../request";
import { BaseRequest } from "./baseRequest";

export class OtherRequest extends BaseRequest{
    handle(data: Request): Request{
        console.log('Other request')
        return {
            isValid: false
        }
    }    
}