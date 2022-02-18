const readlineSync = require("readline-sync");

let l = readlineSync.question("Donne une longueur positive: ");
let w = readlineSync.question("Donne une largueur positive: ");

function calcSurface(l, w){
    return l*w;
}

console.log("La surface est de: " + calcSurface(l,w));

/**Documentation
 * Fonction calcSurface(@param, @param);
 * calcSurcafe permet de calculer la surface d'un élément en partant des données fournies par l'utilisateur.
 * @param {number}  l The first number is the lenght
 * @param {number}  w The second number is the widht
 * @return {number}   Give the surface result of l * w
 */