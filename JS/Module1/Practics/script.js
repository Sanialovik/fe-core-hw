'use strict';

/* task01
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

//  const name = 'Генератор защитного поля';
// //  let price = 1000;
//  const price = 2000;
//  const message = `Выбран ${name} цена за штуку ${price} кредитов`;
//  console.log(message);

// ________________________________________________________________________________________________________________________________________________

/* task02
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/

// const day = 17;
// const month = 10;
// const year = 2048;
// const date = `${day}/${month}/${year}`;
// const message = `Доброе утро, сегодня ${date}, за бортом отличная погода!`;
// // console.log(date); // 17\10\2048
// console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"

// __________________________________________________________________________________________________________________________________________________

/* task03
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// const message = `${name} прибывает на отдых ${date} в ${roomType}`;
// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

// __________________________________________________________________________________________________________________________________________________

/* task04
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
  - Если что-то другое — показывать alert с сообщением 'Неверный пароль, активирована система защиты!'
*/

// const userInput = prompt('Введите пароль доступа');
// const correctPassword = 'jqueryismyjam';
// if (userInput === correctPassword) {
//   alert('Доступ в секретный бункер разрешен!')
// } else if (!userInput) {
//   alert('Была нажата отмена!');
// } else {
//   alert('Неверный пароль, активирована система защиты!');
// }

// ___________________________________________________________________________________________________________________________________________________

/* task05?
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = 50;
// let goods = prompt('Проверка количества товара на складе');

// if (goods > total) {
//   console.log('На складе недостаточно твоаров!');
// } else if (goods === total) {
//   console.log('Вы забираете весь товар cо склада!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// __________________________________________________________________________________________________________________________________________________

/*task06
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

// const userInput = prompt('Введите произвольное целое число');

// if (!userInput) {
//   alert('Ну и ладно, пока!');
// } else if(!Number.isNaN(Number(userInput))) {
//   alert('Спасибо!');
// } else {
//   alert('Необходимо было ввести целое число!');
// }
  
// ___________________________________________________________________________________________________________________________________________________

/* task07??????????????????????????????
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: используй тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
// let type;
// let i;
// // if (value & 1) {
// //   console.log('odd');
// // } else {
// //   console.log('even');
// // }

// let type = value & 1 ? "even" : "odd";


// console.log(`${value} is ${type}`);




// __________________________________________________________________________________________________________________________________________________
/* task08
  Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5.
  Проверять что пользователь может ввести что-то кроме 1-5 не нужно!
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  В противном случае, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// let userInput = prompt('Введите число от 1 до 5, соответствено отелю который вы хотите');

// if (!userInput) {
//   alert('Очень жаль, приходите еще!');
// } else {
//   userInput = Number(userInput);
//   switch (userInput) {
//     case 1:
//       alert("Каталог хостелов");
//       break;
//     case 2:
//       alert("Каталог бюджетных отелей");
//       break;
//     case 3:
//       alert("Каталог отелей ***");
//       break;
//     case 4:
//       alert("Каталог отелей ****");
//       break;
//     case 5:
//       alert("Каталог лучших отелей");
//       break;
//   }
// }
