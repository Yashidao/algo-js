const readlineSync = require("readline-sync");

let x = readlineSync.question("Give me your favorite animal: ");
let y = readlineSync.question("Give me your age: ");
let z = readlineSync.question("Give me your favorite drink: ");

console.log("In a another dimension, you serve your " + x + " a " + z + " but beware if you fail to do that, your " + x + " will punish you with " + y + " punchs!");