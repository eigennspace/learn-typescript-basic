import { Coach } from "./Coach"

export class FootballCoach implements Coach {
  getDailyWorkout(): string {
    return "Kick ball into the post"
  }
}
