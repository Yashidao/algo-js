const readlineSync = require("readline-sync");

console.log("Création d'un tableau de nombre aléatoire entre 1 et 10.");
let n = readlineSync.question("Combien de nombre aléatoire voulez-vous? ");

function min(multiRand){
    let arr = multiRand(n);
    console.log("min: " + arr);
    let i = 1;
    let min = arr[0];
    while(i<arr.length){
        x = arr[i];
        if(x < min){
            min = x;
        }
        i++;
    }
    return min;
}
function max(multiRand){
    let arr = multiRand;
    console.log("max: " + arr);
    let i = 1;
    let max = arr[0];
    while(i<arr.length){
        x = arr[i];
        if(x > max){
            max = x;
        }
        i++;
    }
    return max; 
}

console.log("\nLe min du tableau est: \n" + min() + "\nEt le max est: \n" + max());



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


/*
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
}*/