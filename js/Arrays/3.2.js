let arr = [1, 2, 3, 4, 5]; //3 car 15/5
let arr1 = [100, 101, 102]; //101 car 303/3
let x = 0;
let y = 0;

for(i=0; i<arr.length; i++){
    x += arr[i];
} 
x = x/arr.length;

for(l=0; l<arr1.length; l++){
    y += arr1[l];
}
y = y/arr1.length;

console.log(x);
console.log(y);