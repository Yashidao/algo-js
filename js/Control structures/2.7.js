const readlineSync = require("readline-sync");

let n = readlineSync.question("Entre un nombre: ");
let d = 0;
let a = 0;

for(i=0; i < n; i++){
    let x = readlineSync.question("Entre un nouveau nombre: ");
    a = parseInt(x);
    d += a;
}
console.log("Réponse magique: " + d);