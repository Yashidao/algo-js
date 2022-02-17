let arr = [1, 2, 3, 4, 5]; // méthode push() beuh
let arr1 = [100, 101, 102]; // méthode d'une fonction ok
let arrCopy = [0];

let x;

for(i=0; i<arr.length;i++){
    x = arr[i];
    arrCopy[i] = x;
}

let arr1Copy = [...arr1];
console.log(arrCopy);
console.log(arr1Copy);