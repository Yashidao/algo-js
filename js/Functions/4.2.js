/**
 * Function rand10() allow to have a random integer between 1 and 10.
 */
function rand10(){
    let x = Math.random(); // this make the random between 0 (inclus) and 1 (exclus) in decimal
    x = x * 10; // this multiplies the interval to 0 and 10
    x = Math.ceil(x); // this make the integer round up to have 1 to 10
    return x; // return de new value
}

console.log(rand10());