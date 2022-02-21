const readlineSync = require("readline-sync");
const fs = require("fs");
let data = fs.readFileSync("5.2.json");
let tvObjetc = JSON.parse(data);
var choice;

function askTvSerie(){
    console.log("Des infos sur la série.\nSur quel série veut-tu des infos?");
    for(i = 0 ; i < tvObjetc.length ; i++){
        console.log(tvObjetc[i].name);
    }
    choice = readlineSync.question("ATTENTION A LA SYNTAXE\nVotre choix? ");
    for(i=0 ; i < tvObjetc.length ; i++){
        if(choice === tvObjetc[i].name){
            console.log(tvObjetc[i]);
        }
    }
    return;
}
function randomizeCast(){
    if(choice == "Arrow")
    {
        choice = 0;
    }
    else{
        choice = 1;
    }
    let a = tvObjetc[choice].castMembers;
    a = a.sort(() => Math.random() - 0.5);
    return a;
}

console.log(askTvSerie()+"\n" +randomizeCast(choice));