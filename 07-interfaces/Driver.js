"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasketballCoach_1 = require("./BasketballCoach");
const FootballCoach_1 = require("./FootballCoach");
let trainingBasketball = new BasketballCoach_1.BasketballCoach();
let trainingFootball = new FootballCoach_1.FootballCoach();
let listTrainings = [];
listTrainings.push(trainingBasketball);
listTrainings.push(trainingFootball);
for (let training of listTrainings) {
    console.log(training.getDailyWorkout());
    console.log();
}
