'use strict';


// const value = 12;
// console.log(value > 5 && value < 10);
// console.log(value < 5 || value > 10);

// const value = 5;

// if (value > 5) {
//     console.log('Больше 5!');
// } else if (value < 5) {
//     console.log('Меньше 5!');
// } else {
//     console.log('Равно пяти');
// }


// // else {
// //     console.log('Меньше 5!');
// // }

// const value = 7;
// let message;
// if(value > 5) {
//     message = 'Больше 5'
// } else {
//     message = 'Меньше 5'
// }

// message = value > 5 ? 'Больше 5' : 'Меньше 5';


// let userInput = prompt('Введите положительное число');
// let message = '';

// if (!userInput) {
//     message = 'Была нажата отмена!';

// } else if (Number(userInput) > 0) {
//     message = `Ввели число ${Number(userInput)}`;
// } else {
//     message = 'Невалидные данные';
// }

// console.log(message);


// Switch
let userInput = prompt('Выберите вариант доставки: 0 - самовывоз, 1 - курьер, 2 - новая почта');
// let message;

if (!userInput) {
    console.log('Отмена!');
} else {
    userInput = Number(userInput);

    // if(userInput === 0) {
    //     console.log('самовывоз');
    // }
    // else if(userInput === 1) {
    //     console.log('курьер');
    // } else if(userInput === 2) {
    //     console.log('новая почта');
    // }

    switch (userInput) {
        case 0:
            console.log('самовывоз');
            break;
        case 1:
            console.log('курьер');
            break;
        case 2:
            console.log('новая почта');
            break;
        default:
            console.log('Неверный ввод!');
            break;
    }
}


// const value = null;
