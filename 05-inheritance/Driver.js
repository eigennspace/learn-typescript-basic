"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
let myShape = new Shape_1.Shape(9, 3);
console.log(myShape.getInfo());
let myShape2 = new Circle_1.Circle(1, 3, 1.2);
console.log(myShape2.getInfo());
let myShape3 = new Rectangle_1.Rectangle(0, 0, 1.2, 3.2);
console.log(myShape3.getInfo());
console.log("-------------------------------");
let listShapes = [];
listShapes.push(myShape);
listShapes.push(myShape2);
listShapes.push(myShape3);
for (let shape of listShapes) {
    console.log(shape.getInfo());
}
