import { ITransaction } from "./ITranssaction";
import { PayPalTransaction } from "./PayPalTransaction";
import { StripeTransaction } from "./StripeTransaction";

export class PayPalTransactionAdapter implements ITransaction {
    trackNumber: string;
    amount: number;
    status: string;
    constructor(readonly payPal: PayPalTransaction){
        this.trackNumber = `${payPal.id}`
        this.amount = payPal.amount
        this.status = this.convertStatus(payPal.status)
    }

    private convertStatus(situation: string): string{

        switch (situation) {
			case 'P':
				return "waiting_payment";
			case 'S':
				return "paid";
			case 'F':
				return "cancelled";
			default:
				return "";
		}
    }

}