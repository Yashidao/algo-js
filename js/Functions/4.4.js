// Je sais pas trop si c'est comme ça que je dois le faire...
const readlineSync = require("readline-sync");

console.log("Création d'un tableau de nombre aléatoire entre 1 et 10.");
let n = readlineSync.question("Combien de nombre aléatoire voulez-vous? ");

let arr = multiRand(n);
var arrMin = arr;
var arrMax = arr;

console.log("Le tableau est le suivant: \n" + arr + "\nLe min du tableau est: \n" + min() + "\nEt le max est: \n" + max() + "\nLa moyenne du tableau est:\n" + average());

/**Documentation
 * Fonction average(@param); //Normalement prends un param
 * Cette fonction permet de trouver la moyenne des nombres dans un tableau donner.
 * @param {array}  arr This is the array
 * @return {number}    Return the average number in the array
 */
function average(){
    let x = 0;
    for(i=0; i<arr.length; i++){
        x += arr[i];
    } 
    x = x/arr.length;
    return x;
}
/**Documentation
 * Fonction max(@param); //Normalement prends un param
 * Cette fonction permet de trouver le max dans un tableau donner.
 * @param {array}  arr This is the array
 * @return {number}    Return the max number in the array
 */
function max(){
    let i = 1;
    let max = arrMax[0];
    while(i<arrMax.length){
        x = arrMax[i];
        if(x > max){
            max = x;
        }
        i++;
    }
    return max; 
}
/**Documentation
 * Fonction min(@param); //Normalement prends un param
 * Cette fonction permet de trouver le min dans un tableau donner.
 * @param {array}  arr This is the array
 * @return {number}    Return the min number in the array
 */
function min(){
    let i = 1;
    let min = arrMin[0];
    while(i<arrMin.length){
        x = arrMin[i];
        if(x < min){
            min = x;
        }
        i++;
    }
    return min;
}
/**Documentation
 * Function rand10() allow to have a random integer between 1 and 10.
 */
 function rand10(){
    let x = Math.random(); // this make the random between 0 (inclus) and 1 (exclus) in decimal
    x = x * 10; // this multiplies the interval to 0 and 10
    x = Math.ceil(x); // this make the integer round up to have 1 to 10
    return x; // return de new value
}
/**Documentation
 * Fonction multiRand(@param);
 * Cette fonction permet de créer un tableau de "n" case avec des nombres aléatoire grâce à la function rand10().
 * @param {number}  n This is the value for the numbers of case for the array
 * @return {array}    Return a array of random numbers
 */
function multiRand(n){
    let arr = [];
    for(i=0; i<n; i++){
        arr[i] = rand10();
    }
    return arr;
}