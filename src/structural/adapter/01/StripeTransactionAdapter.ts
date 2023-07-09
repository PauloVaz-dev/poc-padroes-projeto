import { ITransaction } from "./ITranssaction";
import { StripeTransaction } from "./StripeTransaction";

export class StripeTransactionAdapter implements ITransaction {
    trackNumber: string;
    amount: number;
    status: string;
    constructor(readonly strip: StripeTransaction){
        this.trackNumber = strip.code
        this.amount = strip.grossAmount
        this.status = this.convertStatus(strip.situation)
    }

    private convertStatus(situation: number): string{

        switch (situation) {
			case 1:
				return "waiting_payment";
			case 2:
				return "paid";
			case 3:
				return "cancelled";
			default:
				return "";
		}
    }

}