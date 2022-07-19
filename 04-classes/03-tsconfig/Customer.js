"use strict";
class Customer {
    constructor(theFirst, theSecond) {
        this._firstName = theFirst;
        this._lastName = theSecond;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let newCustomer = new Customer("Harist", "Harist");
/*
newCustomer.firstName = "Harist"
newCustomer.lastName = "Islami"
*/
console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}`);
