import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle"
import { Shape } from "./Shape"

let circle = new Circle(1, 3, 1.2)

let rectangle = new Rectangle(0, 0, 1.2, 3.2)
console.log("-------------------------------")

let listShapes: Shape[] = []
listShapes.push(circle)
listShapes.push(rectangle)

for (let shape of listShapes) {
  console.log(shape.getInfo())
  console.log(shape.calculateArea())
  console.log()
}
