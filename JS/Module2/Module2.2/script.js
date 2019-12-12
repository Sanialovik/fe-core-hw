'use strict';

//Циклы

// let counter = 0;
// while (counter < 10) {
//     console.log('counter: ', counter);

//     counter +=1;
// }
// console.log('after while');


// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// let i = 0;
// const max = names.length;

// while (i < max) {
//     console.log(i);
//     console.log(names[i]);
//     i += 1;
// }


// const values = [];
// const max = 5;
// let counter = 0;

// while(counter < max) {
//     let input = prompt('Введи что-то');

//     values.push(input);
//     counter += 1;
// }

// console.log('values: ', values);


// let userInput;

// do {
//     userInput = prompt('Введите число от 1 до 5');

//     userInput = Number(userInput);
//     console.log(userInput);
// } while (userInput > 1 || userInput < 5);

//for

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

// for (let i = 0; i < names.length; i +=1) {
// console.log('i: ', i);
// console.log('names[i]: ', names[i]);
// }

// const numbers = [15, 3, 76, 5, 27, 17, 8, 23];
// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//     console.log('i: ', i);
//     console.log('numbers[i]: ', numbers[i]);

//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//     }
// }

// console.log('smallestNumber: ', smallestNumber);

//for....of

// const numbers = [98, 4, 76, 5, 27, 1, 8, 2];
// let smallestNumber = numbers[0];

// for(const number of numbers) {
//     if (number < smallestNumber) {
//                 smallestNumber = number;
//             }
// }

// console.log('smallestNumber: ', smallestNumber);


// const numbers = [98, 4, 76, -20, 5, 27, 1, 8, 2];
// const evenNumbers = [];

// for(let i = 0, max = numbers.length; i < max ; i += 1) {
// const currentNumber = numbers[i];

// if(currentNumber % 2 === 0) {
// evenNumbers.push(currentNumber);

// }
// }

// console.log(evenNumbers);


// const numbers = [98, 4, 76, -20, 5, 27, 1, 8, 2];
// const evenNumbers = [];

// for(const number of numbers) {


// if(number % 2 === 0) {
// evenNumbers.push(number);

// }
// }

// console.log(evenNumbers);


// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] = numbers[i] * 2;
// }

// console.log(numbers);


// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let resultMsg = 'Не нашли!';

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         resultMsg = 'Нашли!';
//         break;
//     }
// }

// console.log(resultMsg);


// let userInput;

// while (true) {
//     userInput = prompt('Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта');
//     if (userInput === null) break;

//     userInput = Number(userInput);

//     if (userInput >= 1 && userInput <= 3) break;
// }

// switch (userInput) {
//     case 1:
//         alert('самовывоз');
//         break;
//     case 2:
//         alert('курьер');
//         break;
//     case 3:
//         alert('почта');
//         break;
//     default:
//         alert('Отмена');
// }


// const arr = [...10];
// console.log(arr);


/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// const min = numbers[0]
// const max = numbers[numbers.length - 1];
// const userInput;

// while (true) {
//     const userInput = prompt(`Угадайте число от ${min} до ${max}`);
//     const value = Number(userInput);
//     const isInArray = numbers.includes(value);
//     if (isInArray) {
//         alert('Вы угадали');
//         break;
//     } else {
//         alert('Не угадали');
//     }


// }

// for (const value of numbers) {
//     const userInput = prompt(`Угадайте число от ${min} до ${max}`);
//     const value = Number(userInput);
//     const isInArray = numbers.includes(value);
//     if (isInArray) {
//         alert('Вы угадали');
//         break;
//     } else {
//         alert('Не угадали');
//     }
// }



// const arr = [...10];
// console.log(arr);