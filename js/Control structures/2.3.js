const readlineSync = require("readline-sync");

let n = 0;

console.log("Boucle while: ");
while (n < 101){
    n++
    if(n%2 === 0){
        console.log(n);
    }
}
console.log("Boucle for: ");

for (n=0; n < 101; n++){
    if(n%2 === 0){
        console.log(n);
    }
}
