import { BaseTreatment } from "./baseTreatment"
import { Call } from "./call"

export class SalesTreatment extends BaseTreatment {
    Treat(call: Call): Call{
        if(call.option === 1){
            console.log('Sales treatment')
            call.solved = true
            return call
        }

        return super.Treat(call)
    }
}