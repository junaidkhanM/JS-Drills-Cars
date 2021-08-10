const {problem1} = require('../problem1');
const { inventory } = require('../inventory');


const result = problem1(inventory);
console.log(`Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`);