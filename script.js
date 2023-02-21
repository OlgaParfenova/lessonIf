// task 1

// console.log(false == 0); // ------ true
// console.log(false == null); // false (falsy)
// console.log(false == -0); // ------ true
// console.log(false == NaN); // false (falsy)
// console.log(false == undefined); // false (falsy)
// console.log(false == ''); // ------ true

// task 2

// let test = 1;
//
// if (test == true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 3

// let test = 0;
//
// if (test == true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 4

// let test = '';
//
// if (test == false) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 5

// let test;
//
// if (test == true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 6

// let test = 3 * 'a';
//
// if (test == true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 7

// let test = true;
//
// if (test) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 8
//
// let test = true;
//
// if (!test) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 9

// let test = true;
//
// if (!test) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 10

// let test = true;
//
// if (test) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 11

// let test = -1;
//
// if (test) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 12

// let day = 32;
//
// if (day >= 1 && day <=10) {
//     console.log('первая декада');
// } else if (day >= 11 && day <=20) {
//     console.log('вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('третья декада');
// } else {
//     console.log('дата не существует');
// }

// task 13

// let day = 32;
//
// if (day >= 1 && day <=10) {
//     console.log('первая декада');
// } else if (day >= 11 && day <=20) {
//     console.log('вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('третья декада');
// } else {
//     throw new Error('такой даты не существует');
// }


// task 14

// let num = 5;
//
// if (num >=10 && num <= 99) {
//     let sum = num.toString().split('').reduce((a, b) => +a + +b);
//     if (sum <= 9) {
//         console.log('сумма цифр однозначна');
//     } else {
//         console.log('сумма цифр двузначна');
//     }
// } else {
//     console.log('число не двузначное');
// }

// task 15

// let lang = 'cn';
//
// switch (lang) {
//     case 'ru':
//         console.log('рус');
//         break;
//     case 'en':
//         console.log('анг');
//         break;
//     case 'de':
//         console.log('нем');
//         break;
//     default:
//         console.log('язык не поддерживается');
//         break;
// }

// task 16

// let num = 1;
// let res = num >= 0 ? '1' : '2';
// console.log(res);

// task 17

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b);

// task 18

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a > b);

// task 19

// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log(a != b);

// task 20

// let verification = confirm('Вам есть 18 лет?');
//
// if (verification) {
//     alert('Текст для взрослых');
// } else {
//     alert('Доступ запрещён');
// }
