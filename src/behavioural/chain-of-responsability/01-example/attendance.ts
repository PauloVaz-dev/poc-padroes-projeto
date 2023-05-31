import { Call } from "./call";
import { OthersTreatment } from "./othersTreatment";
import { RefoundTreatment } from "./RefoundTreatment";
import { SalesTreatment } from "./salesTreatment";

export class Attendance {
    Handle(option: number){
        const treat = new SalesTreatment()

        treat
            .setNextTreatment(new RefoundTreatment())
            .setNextTreatment(new OthersTreatment())
        
        treat.Treat(new Call(option))
    }
}