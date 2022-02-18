const readlineSync = require("readline-sync");

console.log("Création d'un tableau de nombre aléatoire entre 1 et 10.");
let n = readlineSync.question("Combien de nombre aléatoire voulez-vous? ");

function rand10(){
    let x = Math.random();
    x = x * 10;
    x = Math.ceil(x);
    return x;
}
function multiRand(n){
    let arr = [];
    for(i=0; i<n; i++){
        arr[i] = rand10();
    }
    return arr;
}

console.log(multiRand(n));

/**Documentation
 * Fonction multiRand(@param);
 * Cette fonction permet de créer un tableau de "n" case avec des nombres aléatoire grâce à la function rand10().
 * @param {number}  n This is the value for the numbers of case for the array
 * @return {array}    Return a array of random numbers
 */