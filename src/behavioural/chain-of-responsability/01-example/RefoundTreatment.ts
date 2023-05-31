import { BaseTreatment } from "./baseTreatment"
import { Call } from "./call"

export class RefoundTreatment extends BaseTreatment {
    Treat(call: Call): Call{
        if(call.option === 2){
            console.log('Refound treatment')
            call.solved = true
            return call
        }

        return super.Treat(call)
    }
}