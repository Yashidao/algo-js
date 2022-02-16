const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("Give me your shoe size please: ");
console.log("Thank's you! And now...");
let birth = readlineSync.question("Give me your birth years too: ");

let magic = ((((shoeSize*2)+5)*50)-birth)+1766;

console.log("With magic this is : " + magic);