var reviews = [5, 4.5, 4, 1, 3];
var totals = 0;
for (var i = 0; i < reviews.length; i++) {
    totals += reviews[i];
}
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var indexOfReviews = reviews_1[_i];
    console.log(indexOfReviews);
}
var average = totals / reviews.length;
console.log("The average of the arrays = ".concat(average));
