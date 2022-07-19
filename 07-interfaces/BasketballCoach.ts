import { Coach } from "./Coach"

export class BasketballCoach implements Coach {
  getDailyWorkout(): string {
    return "Dunk 10 times in a row"
  }
}
