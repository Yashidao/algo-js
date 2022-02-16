const readlineSync = require("readline-sync");

let age = readlineSync.question("Entre ton age: ");

if (age >= 18){
    console.log("Tu es un adulte!")
}
else{
    console.log("Tu n'es pas une adulte!")
}