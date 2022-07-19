var Customer = /** @class */ (function () {
    function Customer(theFirst, theSecond) {
        this.firstName = theFirst;
        this.lastName = theSecond;
    }
    return Customer;
}());
var newCustomer = new Customer("Harist", "Harist");
/*
newCustomer.firstName = "Harist"
newCustomer.lastName = "Islami"
*/
console.log("Hello ".concat(newCustomer.firstName, " ").concat(newCustomer.lastName));
