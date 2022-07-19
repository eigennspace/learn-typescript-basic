class Customer {
  firstName: string

  lastName: string

  constructor(theFirst: string, theSecond: string) {
    this.firstName = theFirst
    this.lastName = theSecond
  }
}

let newCustomer = new Customer("Harist", "Harist")
/*
newCustomer.firstName = "Harist"
newCustomer.lastName = "Islami"
*/
console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}`)
