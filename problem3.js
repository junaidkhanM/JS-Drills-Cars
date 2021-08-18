// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
// Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

module.exports.problem3 = (data) => {
    if (data === undefined || data.length === 0) {
        return;
    }

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i].car_model < data[j].car_model) {
                let temp = data[i].car_model;
                data[i].car_model = data[j].car_model;
                data[j].car_model = temp;
            }
        }
    }
    return data;
}
