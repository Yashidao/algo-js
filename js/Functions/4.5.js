const readlineSync = require("readline-sync");

console.log("Calcule d'une distance entre 2 coordonnée.\nJe vais avoir besoin de deux coordonées en commencant par x1, y1 puis x2 et y2.");

let x1 = readlineSync.question("Entrer x1: ");
let y1 = readlineSync.question("Entrer y1: ");
let x2 = readlineSync.question("Entrer x2: ");
let y2 = readlineSync.question("Entrer y1: ");

console.log("Voici la distance entre les deux points donnés: " + calcDistance(x1, y1, x2, y2));
/**Documentation
 * Function calcDistance(@param,@param,@param,@param) 
 * Permet de calculer la distance en 2 points donner
 * @param {number}  x1 valeur en x du premier point
 * @param {number}  y1 valeur en y du premier point
 * @param {number}  x2 valeur en x du second point
 * @param {number}  y2 valeur en y du second point
 * @return {number} d  retourne la distance en décimal (x,xx)        
 */
function calcDistance(x1, y1, x2, y2){
    let d = Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2));
    return d.toFixed(2);
}