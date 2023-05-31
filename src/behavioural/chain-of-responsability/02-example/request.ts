interface RequestData{
    body: any
    headers: any
}
export class Request{
    body?: any
    headers?: any
    isValid: boolean = false
    provider?: string 
    constructor({ body = null, headers = null }: RequestData){
        this.body = body
        this.headers = headers
    }
}