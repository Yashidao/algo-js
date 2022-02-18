const readlineSync = require("readline-sync");

let x = 1;

console.log("Permet de savoir le factoriel d'un nombre.")
let a = readlineSync.question("De quel nombre voulez-vous le factoriel? ");
console.log("Factoriel de " + a + "! = " + factorial(a));

/**Documentation
 * Function factorial permet de trouver le factoriel d'un nombre a
 * @param {number} a C'est à partir de ce nombre qu'on aura le factoriel a (a!)
 * @returns          retourne la valeur factoriel de a
 */
function factorial(a){
    if(a>0){
        x = x*a;
        factorial(a-1);
    }
    return x;
}
