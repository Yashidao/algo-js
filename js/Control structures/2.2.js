const readlineSync = require("readline-sync");

console.log("Entrer 3 nombres chacun à leur tour: minimum, maximum et un nombre entre les deux.");

let min = readlineSync.question("Entrer le nombre minimum: ");
let max = readlineSync.question("Entrer le nombre maxmum: ");

if(min < max){
    let current = readlineSync.question("Entrer le nombre choisis: ");
    if(min < current && current < max){
        console.log("Votre nombre est bien entre " + min + " et " + max + " Félicitations!");
    }
    else{
        console.log("Votre nombre ne se trouve pas entre " + min + " et " + max + "...");
    }
}
else{
    console.log("Il m'est impossible de ne pas être poli mais vous avez sûrement dû faire une faute de frappe en entrant le minimum.");
}