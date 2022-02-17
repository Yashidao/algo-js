let x = 0;

console.log("On va divisé les nombres pairs par 2 et multiplier les nombres impairs par 3: ");
for (x=0;x<101;x++){
    if(x%2===0){
        console.log("x corresponds à " + x + " /2 = " + x/2);
    }
    else{
        console.log("x corresponds à " + x + " *3 = " + x*3);
    }
}
