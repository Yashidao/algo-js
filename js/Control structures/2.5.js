const readlineSync = require("readline-sync");

let n = 0;
console.log("Attention, vous n'avez que 100 essais.");
let fav = readlineSync.question("Entrer votre nombre favori: ");


while (n < 101){
    if(fav == 42){
        console.log("Vous avez trouvé votre nombre favori!");
        break;
    }
    else{
        fav = readlineSync.question("Entrer votre nombre favori: ");
        n++
    }
    if(n == 5){
        console.log("Votre seule indice: c'est un multiple de 7 :)");
    }
}