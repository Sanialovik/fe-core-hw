'use strict';

/*task01
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// users.shift("Mango");
// // Удалить первый элемент массива
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// users.pop("Chelsey");
// // Удалить последний элемент массива
// console.log(users); // ["Poly", "Ajax"]
// users.unshift("Lux");
// // Добавить в начало массива пользователя "Lux"
// console.log(users); // ["Lux", "Poly", "Ajax"]
// users.push("Jay", "Kiwi");
// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete

// // const userToDelete = "Ajax";
// const userToDelete = users.splice(2, 1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = users.splice(2, 0, "Kong");

// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// ___________________________________________________________________________________________________________________________________________________________________

/*task02
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента]. 
 * 
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// let i = 0;
// const max = users.length;

// while (i < max) {
//     console.log(`${i+1}-${users[i]}`);
    
//     i += 1;
// }

// ___________________________________________________________________________________________________________________________________________________________________

/*task03
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// // В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let totalPrice = 0;
// const price = 10;
// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// const words = message.split(' ');
// console.log(words);

// // Выведи в консоли длину массива words
// console.log('words length: ', words.length); // 8

// totalPrice = price * words.length;
// // Вычисли сколько будет стоить гравировка и запиши результат в переменную price
// console.log(totalPrice); // 80

// ___________________________________________________________________________________________________________________________________________________________________

/*task04
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
*/

// let userInput;

// while (true) {
//     userInput = prompt('Введите число больше 100');
//     if (userInput === null) break;
//     // userInput = Number(userInput);
//     if(userInput > 100) break;

// }

// ___________________________________________________________________________________________________________________________________________________________________

// /*task05
//   Напиши скрипт, который выбирает из массива numbers 
//   все числа, которые больше чем значение переменной num, 
//   записывая эти числа в массив matched.

//   В результате в массиве matched будут все подходяшие числа.

//   PS: используй цикл for или for...of и оператор ветвления if
// */

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// for (const number of numbers) {
//     if(number > num) {
//         matched.push(number);
//     }
// }

// console.log(matched); // [17, 14, 14, 32, 18, 26]

// ___________________________________________________________________________________________________________________________________________________________________

/*task06
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/
// let letterNumber = 1000;
// const message = "May the force be with you";
// let longestWord;
// const arr = message.split(' ');
// const max = arr.length;
// let wordLength = 0;

// // for (let i = 0; i < max; i += 1) {
// //   if(arr[i].length>wordLength) {
// //     longestWord = arr[i];
// //     wordLength = arr[i].length;
// //   }
// // }
  

// // console.log(longestWord);

// for(const word of arr) {
//   if(word.length < letterNumber) {
//     longestWord = word;
//     letterNumber = word.length;
//   }
// }

// console.log(longestWord); // 'force'

// ___________________________________________________________________________________________________________________________________________________________________

/*task07
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

// const min = 0;
// const max = numbers[numbers.length -1];
// // console.log(numbers);
// // // const input = prompt(`Введите цифру от ${min} до ${max}`); // цикл
// // // const value = Number(input); // цикл
// // // const isInArray = numbers.includes(value); // цикл
// // // if(isInArray) {
// // //   alert('Поздравляем, Вы угадали!');
// // // } else {  
// // //   alert('Сожалеем, Вы не угадали!');
// // // }


// while (true) {
//   const input = prompt(`Введите цифру от ${min} до ${max}`); // цикл
// const value = Number(input); // цикл
// const isInArray = numbers.includes(value); // цикл
// if(isInArray) {
//   alert('Поздравляем, Вы угадали!');
//   break;
// } else {
//   alert('Сожалеем, Вы не угадали!');
// }
// }