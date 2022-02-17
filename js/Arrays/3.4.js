let arr = [1, 2, 3, 4, 5];

let x;
let y; 
let min = arr[0]; // j'insere la valeur de l'index 0 du tableau
let max = arr[0];
let i=1; // sert d'index donc je le set à 1 car le 0 est déjà utilisé

while(i<arr.length){
    x = arr[i];
    y = arr[i];
    if(x < min){
        min = x;
    }
    if(max < y){
        max = y;
    }
    i++;
}

console.log("le minimum: " + min + " et le maximum: " + max + " du tableau.");