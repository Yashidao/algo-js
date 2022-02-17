let arr = [1, 2, 3, 4, 5]; //15
let arr1 = [100, 101, 102]; //303
let x = 0;
let y = 0;

for(i=0; i<arr.length; i++){
    x += arr[i];
}
for(l=0; l<arr1.length; l++){
    y += arr1[l];
}

console.log(x);
console.log(y);