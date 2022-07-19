"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let newCustomer = new Customer_1.Customer("New", "Customer");
console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}`);
