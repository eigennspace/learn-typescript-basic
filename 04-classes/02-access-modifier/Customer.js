var Customer = /** @class */ (function () {
    function Customer(theFirst, theSecond) {
        this._firstName = theFirst;
        this._lastName = theSecond;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var newCustomer = new Customer("Harist", "Harist");
/*
newCustomer.firstName = "Harist"
newCustomer.lastName = "Islami"
*/
console.log("Hello ".concat(newCustomer.firstName, " ").concat(newCustomer.lastName));
