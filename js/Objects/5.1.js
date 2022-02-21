const readlineSync = require("readline-sync");
const fs = require("fs");
let data = fs.readFileSync("5.1.json");
let tvObjetc = JSON.parse(data);

function askTvSerie(){
    console.log("Des infos sur la série.\nSur quel série veut-tu des infos?");
    for(i = 0 ; i < tvObjetc.length ; i++){
        console.log(tvObjetc[i].name);
    }
    let choice = readlineSync.question("ATTENTION A LA SYNTAXE\nVotre choix? ");
    for(i=0 ; i < tvObjetc.length ; i++){
        if(choice === tvObjetc[i].name){
            console.log(tvObjetc[i]);
        }
    }
    return;
}

console.log(askTvSerie());