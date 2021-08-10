// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory. 
//  Execute a function and return an array that only contains BMW and Audi cars.  
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

module.exports.problem6 = (data) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].car_make === 'BMW' || data[i].car_make === 'Audi') {
            result.push(data[i].car_make);
        }
    }
    return result;
}