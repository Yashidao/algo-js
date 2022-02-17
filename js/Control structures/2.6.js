const readlineSync = require("readline-sync");

let n = readlineSync.question("J'aurais besoin d'un nombre entre 1 et 7: ");

if(n > 0 && n < 8){
    if(n == 1){
        console.log("Lundi");
    }
    else if(n == 2){
        console.log("Mardi");
    }
    else if(n == 3){
        console.log("Mercredi");
    }
    else if(n == 4){
        console.log("Jeudi");
    }
    else if(n == 5){
        console.log("Vendedi");
    }
    else if(n == 6){
        console.log("Samedi");
    }
    else if(n == 7){
        console.log("Dimanche");
    }
}
else{
    console.log("Le chiffre ne corresponds pas, au revoir!");
}