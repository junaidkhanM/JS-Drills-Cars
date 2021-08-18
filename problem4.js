// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. 
// Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

module.exports.problem4 = (data) => {
    if (data === undefined || data.length === 0) {
        return;
    }
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(data[i].car_year);
    }
    return result;
}