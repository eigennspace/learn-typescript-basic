"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let circle = new Circle_1.Circle(1, 3, 1.2);
let rectangle = new Rectangle_1.Rectangle(0, 0, 1.2, 3.2);
console.log("-------------------------------");
let listShapes = [];
listShapes.push(circle);
listShapes.push(rectangle);
for (let shape of listShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
