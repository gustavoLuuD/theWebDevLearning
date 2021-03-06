import { Account } from "./Account.js";

export class CurrentAccount extends Account{
    constructor(customer, agency){
        super(0, customer, agency);
    }
    withdraw(value){
        let tax = 1.05;
        return this._withdraw(value, tax);
    }
}