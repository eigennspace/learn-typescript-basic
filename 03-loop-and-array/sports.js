var sportsName = ["Footbal", "Golf", "Basketball"];
//simplified For Loop
for (var _i = 0, sportsName_1 = sportsName; _i < sportsName_1.length; _i++) {
    var sport = sportsName_1[_i];
    if (sport == "Basketball") {
        console.log("".concat(sport, " <- My Favourite"));
    }
    else {
        console.log(sport);
    }
}
