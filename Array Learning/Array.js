"use strict";
// var userName:string=("Zeeshan Shafi")
// console.log(userName);
var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(array.length),
    // splice is use for to delete value in index//
    array.splice(5, 0, 51, 52, 53, 54, 55, 56, 57, 58, 59);
console.log(array);
// under the line splice method is use to delete //
array.splice(5, 2);
console.log(array);
console.log(array.length);
//in array push comand is use to add index in array last//
array.push(101, 102);
console.log(array);
array.pop();
console.log(array);
array.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9),
    console.log(array);
array.shift();
console.log(array);
