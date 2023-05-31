import { CeoBudgetHandler } from "./ceo-budget-handler";
import { CustomerBudget } from "./customer-budget";
import { DirectorBudgetHandler } from "./director-budget-handler";
import { ManagerBudgetHandler } from "./manager-budget-handler";
import { SellerBudgetHandler } from "./seller-budget-handler";

const customer = new CustomerBudget(10000)

const seller = new SellerBudgetHandler()
    seller.setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CeoBudgetHandler())

const data = seller.handle(customer)
console.log(data.approved, data.total)