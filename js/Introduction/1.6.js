const readlineSync = require("readline-sync");

let x = readlineSync.question("Give me a integer (without decimal) please: ");
console.log("Thank's you! now...");
let y = readlineSync.question("Give me a second one please: ");
console.log("Thank's you!");

console.log("Voici le reste de la division des deux nombres: ", x % y);