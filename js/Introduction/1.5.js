const readlineSync = require("readline-sync");

let x = readlineSync.question("Tel me a decimal number please: ");
console.log("Thank's you! now...");
let y = readlineSync.question("Tel me a second decimal number please: ");
console.log("Thank's you! now...");

x = Math.round(x);

console.log("Voici la multiplication des deux nombres dont le premier est arondi: ", x * y);