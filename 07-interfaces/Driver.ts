import { BasketballCoach } from "./BasketballCoach"
import { Coach } from "./Coach"
import { FootballCoach } from "./FootballCoach"

let trainingBasketball = new BasketballCoach()
let trainingFootball = new FootballCoach()

let listTrainings: Coach[] = []
listTrainings.push(trainingBasketball)
listTrainings.push(trainingFootball)

for (let training of listTrainings) {
  console.log(training.getDailyWorkout())
  console.log()
}
