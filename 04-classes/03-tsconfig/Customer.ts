class Customer {
  private _firstName: string

  private _lastName: string

  public get firstName(): string {
    return this._firstName
  }
  public set firstName(value: string) {
    this._firstName = value
  }

  public get lastName(): string {
    return this._lastName
  }
  public set lastName(value: string) {
    this._lastName = value
  }

  constructor(theFirst: string, theSecond: string) {
    this._firstName = theFirst
    this._lastName = theSecond
  }
}

let newCustomer = new Customer("Harist", "Harist")
/*
newCustomer.firstName = "Harist"
newCustomer.lastName = "Islami"
*/
console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}`)
