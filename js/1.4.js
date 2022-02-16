const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?");
console.log("Thank's you!");

let firstName = readlineSync.question("What's your name?");
console.log("Thank's you!");

let city = readlineSync.question("What's your name?");
console.log("Thank's you!");

console.log("Your name is "+name+" "+firstName+" and you live in "+city+".");
