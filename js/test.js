const readlineSync = require("readline-sync");

let fav = readlineSync.question("Entrer votre nombre favori: ");

while (fav != 42){
    if(fav == 42){
        console.log("Vous avez trouvé votre nombre favori!");
        break;
    }
    else{
        fav = readlineSync.question("Entrer votre nombre favori: ");
    }
}