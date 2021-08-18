const {problem5} = require('../problem5');
const {inventory} = require('../inventory');


const result = problem5(inventory);

if (result !== undefined)
    console.log(result, result.length);
else 
    console.log(result);