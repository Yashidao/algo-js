const readlineSync = require("readline-sync");


let x = readlineSync.question("Give me your favorite animal: ");
console.log("C'est la première question, il est reste 2 autres.")
let y = readlineSync.question("Give me your age: ");
console.log("Il est reste 1 question. :)")
let z = readlineSync.question("Give me your favorite drink: ");
console.log("C'est fini, voici une petite histoire!")

console.log("In a another dimension, you serve your " + x + " a " + z + " but beware if you fail to do that, your " + x + " will punish you with " + y + " punchs!");