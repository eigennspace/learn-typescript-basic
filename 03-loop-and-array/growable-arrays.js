var listFoods = ["Nasi Goreng", "Bakso"];
listFoods.push("Batagor");
for (var _i = 0, listFoods_1 = listFoods; _i < listFoods_1.length; _i++) {
    var food = listFoods_1[_i];
    if (food == "Batagor") {
        console.log("".concat(food, " -> My favourite"));
    }
    else {
        console.log(food);
    }
}
