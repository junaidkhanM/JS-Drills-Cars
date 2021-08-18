const {problem1} = require('../problem1');
const { inventory } = require('../inventory');

const id = 33;
const result = problem1(inventory, id);

if (result === undefined) {
    console.log("No car with id :", id);
} else {
    console.log(`Car ${id} is a ${result.car_year} ${result.car_make} ${result.car_model}`);
}



