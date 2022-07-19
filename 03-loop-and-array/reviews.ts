let reviews: number[] = [5, 4.5, 4, 1, 3]

let totals: number = 0

for (let i = 0; i < reviews.length; i++) {
  totals += reviews[i]
}

for (let indexOfReviews of reviews) {
  console.log(indexOfReviews)
}

let average: number = totals / reviews.length
console.log(`The average of the arrays = ${average}`)
