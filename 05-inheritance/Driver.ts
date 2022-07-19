import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle"
import { Shape } from "./Shape"

let myShape = new Shape(9, 3)
console.log(myShape.getInfo())

let myShape2 = new Circle(1, 3, 1.2)
console.log(myShape2.getInfo())

let myShape3 = new Rectangle(0, 0, 1.2, 3.2)
console.log(myShape3.getInfo())
console.log("-------------------------------")

let listShapes: Shape[] = []
listShapes.push(myShape)
listShapes.push(myShape2)
listShapes.push(myShape3)

for (let shape of listShapes) {
  console.log(shape.getInfo())
}
