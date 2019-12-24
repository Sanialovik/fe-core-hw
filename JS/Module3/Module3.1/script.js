'use strict';

// const add = function (x = 3, y = 2) {


//     console.log('x', x);
//     console.log('y', y);

//     return x + y;
// };

// const result = add(12, 13);

// console.log('result1 ', result);


// const numbers1 = [23, 34, 2, 45, 23, 46, 3, 5, 56];
// const numbers2 = [13, 324, 12, 45, 73, 46, 3, 53, 56];
// const numbers3 = [233, 344, 23, 45, 23, 46, 32, 5, 56];

// const findSmallestNumber = function (arr) {
//     let smallestNumber = arr[0];

//     for (const currentNumber of arr) {
//         if (currentNumber < smallestNumber) {
//             smallestNumber = currentNumber;
//         }
//     }

//     // for (let i = 1; i < arr.length; i += 1) {
//     //     const currentNumber = arr[i];
//     //     if (currentNumber < smallestNumber) {
//     //         smallestNumber = currentNumber;
//     //     }
//     // }
//     return smallestNumber;
// };

// console.log(findSmallestNumber(numbers1)); 
// console.log(findSmallestNumber(numbers2));
// console.log(findSmallestNumber(numbers3));



// const double = function(arr) {

// for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i] * 2;
// }

// return arr;
// };
// const numbers = [1, 2, 3, 4, 5];

// console.log(double(numbers));


// const add = function () {
//     console.log(arguments);

// const args = Array.from(arguments);
// console.log('args: ', args);

//     let total = 0;
//     for (let i = 0; i < arguments.length; i += 1) {
//         total += arguments[i];
//     }
//     return total;
// };

// console.log(add(5, 10, 15, 20, 25, 30));


const fn = function (arr, ...args) {
console.log(arr);
console.log(args);
// // const arr = args[0];
// // console.log('arr: ', arr);
// // const values = args.slice(1);
// // console.log('values: ', values);

// // for(let i = 0; i<values.length; i +=1) {
// //     console.log(values[i]);
// // }

};

fn([1, 2, 3], [4, 5, 6], 3, 4, 5);
fn([4, 6, 7], 9, 4, 12, 19);


// const great = function(name) {
// const message = `Good day to you ${name}`;

// console.log(message);
// };

// great('Mango');


// const number = 5;

// const add = function (value) {
//     return number + value;
// };

// console.log(add(10));


// const add = (a, b, c) => { 
//     return a + b + c;
// };


// const names = ['Mango', 'Poly', 'Ajax'];

// const findName = function (allNames, nameToFind) {
//     return allNames.includes(nameToFind);
// };

// const findName = (allNames, nameToFind) => allNames.includes(nameToFind);

// const includes = function (arr, value) {

//     for (const element of arr) {
//         if (element === value) return true;
//     }

//     return false;
// };


// const printMessage = function(callback) {
//     const message = callback();
//     console.log(message);
// };

// const getMassage = function() {
//     return 'Welcome to the jungle!';
// };

// printMessage(getMassage);


// console.log([1, 2, 3, 4, 5].map(function (el) {
//     return el*3;
// }));


// const map = function (arr, callback) {
// const newArray = [];

// for (const element of arr) {
//     const result = callback(element);
//     newArray.push(result);
// }

// return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];

// const makeDouble = function(num) {
//     return num * 2;
// };

// const doubledNumbers = map(numbers, makeDouble);

// console.log(doubledNumbers);



// const makeCounter = function () {
// let i = 0;

//     return function() {
//         i += 1; 
//         console.log(i);
//     };
// };

// const i = makeCounter();

// i();
// i();
