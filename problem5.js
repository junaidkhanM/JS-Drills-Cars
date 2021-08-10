//  ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem,
// find out how many cars were made before the year 2000 and return the array of older cars and log its length.

module.exports.problem5 = (data) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].car_year < 2000) {
            result.push(data[i].car_year);
        }
    }

    return result
}