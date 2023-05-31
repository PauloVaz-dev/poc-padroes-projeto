import { BaseTreatment } from "./baseTreatment"
import { Call } from "./call"

export class OthersTreatment extends BaseTreatment {
    Treat(call: Call): Call{
        console.log('Others Treatment')
        return call
    }
}