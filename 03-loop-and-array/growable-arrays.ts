let listFoods: string[] = ["Nasi Goreng", "Bakso"]

listFoods.push("Batagor")

for (let food of listFoods) {
  if (food == "Batagor") {
    console.log(`${food} -> My favourite`)
  } else {
    console.log(food)
  }
}
