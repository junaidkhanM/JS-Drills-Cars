const {problem1} = require('../problem1');
const { inventory } = require('../inventory');


const result = problem1(inventory);
if (result.length === 0) {
    console.log([]);
} else {
    console.log(`Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`);
}
