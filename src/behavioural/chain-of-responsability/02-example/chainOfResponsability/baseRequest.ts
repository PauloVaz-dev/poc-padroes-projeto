import { Request } from "../request"

export abstract class BaseRequest {
    protected handler: BaseRequest | null = null

    nextHandler(handler: BaseRequest): BaseRequest {
        this.handler = handler
        return handler
    }
    handle(request: Request): Request{
        if(this.handler) return this.handler.handle(request)
        return request
    }
}