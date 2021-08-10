// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
// Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

module.exports.problem3 = (data) => {
    data.sort((a, b) => a.car_model.localeCompare(b.car_model))
    return data;
}
