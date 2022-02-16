const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name? ");
console.log("Thank's you! And...");

let firstName = readlineSync.question("What's your first name? ");
console.log("Another question... ");

let city = readlineSync.question("What's your city? ");
console.log("That's was the last :) ");

console.log("Your name is "+name+" "+firstName+" and you live in "+city+".");
