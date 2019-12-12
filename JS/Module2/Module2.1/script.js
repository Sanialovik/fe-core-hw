'use strict';

// const names = ['Mango', 'Poly', 'Ajax'];

// console.log(names);
// console.log('length: ', names.length);
// console.log(names[0]);

// names[0] = 'Kiwi';
// console.log(names);
// console.log('length: ', names.length);
// names[3] = 'Mango';
// console.log(names);
// console.log('length: ', names.length);
// names[5] = 'Chelsey';
// console.log(names);
// console.log('length: ', names.length);

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6, ['a', 'b', 'c']],
//     [7, 8, 9]
// ];

// console.log(matrix);

// console.log(matrix[1][3][1]);


// //Split & Join
// const message = 'Hello JS world';
// const arr = message.split(' ');
// console.log(arr);
// // const newMessage = arr.join(' <-> ');
// // console.log(newMessage);


//includes()
const numbers = [1, 4, 6, 8, 10, 15, 25, 30];
const min = numbers[0];
const max = numbers[numbers.length -1];
console.log(numbers);
const input = prompt(`Угадайте число от ${min} до ${max}`);
const value = Number(input);
const isInArray = numbers.includes(value)
if(isInArray) {
    console.log('Угадали такое число есть');
} else {
    console.log('Не угадали!');
}

// // push(), pop()
// const names = ['Mango', 'Ajax', 'Poly'];
// // names.push('Kiwi', 123);
// // console.log(names);
// // names.pop();
// // console.log(names);
// // names.shift();
// // console.log(names);
// names.unshift('Hello');
// console.log(names);

//Array.slice()

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// const newNames = names.slice(0, 2);

// console.log(newNames);


//Array.splice()

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

// names.splice(1, 2);
// console.log(names);

// names.splice(2, 0, 'Chelsey', 'Monking');
// console.log(names); 

// names.splice(1,2, 'a', 'b');
// console.log(names);

//Array.concat()

// const oldNames = ['Mango', 'Poly'];
// const newNames = ['Kiwi', 'Ajax'];

// const allNames = [].concat(oldNames, newNames);
// console.log(allNames);



