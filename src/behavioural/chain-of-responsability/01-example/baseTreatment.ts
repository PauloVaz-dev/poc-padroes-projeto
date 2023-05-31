import { Call } from "./call"

export abstract class BaseTreatment {
    protected nextTreatment: BaseTreatment | null = null

    setNextTreatment(treatment: BaseTreatment): BaseTreatment{
        this.nextTreatment = treatment
        return treatment
    }

    Treat(call: Call): Call{
        if(this.nextTreatment) return this.nextTreatment.Treat(call)
        return call
    }
}