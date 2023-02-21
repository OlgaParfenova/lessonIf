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

// task 21

// let age = 21;
// let adult;
//
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);

// task 22

// let age = 17;
// let adult;
//
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);

// task 23

// let age = 17;
// let adult;
//
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);

// task 24

// let age = 17;
// let res;
//
// if (age >= 18) {
//     if (age <= 23) {
//         res = 'от 18 до 23';
//     } else {
//         res = 'больше 23';
//     }
// } else {
//     res = 'меньше 18';
// }
//
// console.log(res);

// task 25

// let age = 19;
// let res;
//
// if (age >= 18) {
//     if (age <= 23) {
//         res = 'от 18 до 23';
//     } else {
//         res = 'больше 23';
//     }
// } else {
//     res = 'меньше 18';
// }
//
// console.log(res);

// task 26

// let min = 47;
//
// if (min >=0 && min <= 19) {
//     console.log('первая треть');
// }
//
// if (min >= 20 && min <= 39) {
//     console.log('вторая треть');
// }
//
// if (min >= 40 && min <= 59) {
//     console.log('третья треть');
// }

// task 27

// let arr = [4, 8, 10];
//
// if (arr.length === 3) {
//     console.log(arr.reduce((a, b) => a + b));
// }

// task 28

// let str = 'avei';
// let start = str[0];
//
// if (start == 'a') {
//     console.log('!');
// }

// task 29

// let str = 'frew';
// let end = str[str.length - 1];
//
// if (end == 'x') {
//     console.log('!');
// }

// task 30

// let str = 'befegg';
// let start = str[0];
//
// if (start == 'a' || start == 'b') {
//     console.log('!');
// }

// task 31

// let num = 21430;
// let str = String(num);
// let last = str[str.length - 1];
//
// if (last == 0) {
//     console.log('!')
// }

// task 32

// let num = 38478;
// let str = String(num);
// let last = str[str.length - 1];
//
// if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
//     console.log('even number');
// } else {
//     console.log('odd number');
// }

// task 33

// let num = 265467;
//
// if ((num % 2) === 0) {
//     console.log('even number');
// } else {
//     console.log('odd number');
// }

// task 34

// let num = 9;
//
// if (num % 3 === 0) {
//     console.log('число делится на 3');
// } else {
//     console.log('число не делится на 3');
// }

// task 35

// let num1 = '1';
// let num2 = '2';
//
// if (+num1 + +num2 === 3) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 36

// let num1 = '1';
// let num2 = '2';
//
// if (Number(num1) + Number(num2) === 3) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 37

// let num = 7123;
// let str = String(num);
//
// if (Number(str[0]) === 1) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 38

// let num = 123;
// let str = String(num);
//
// if (+str[0] === 1) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 39

// let num = 123;
// let str = String(num);
//
// if (+str[0] === 1) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 40

// let num = 12;
// let str = String(num);
//
// if (str.length === 2) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 41

// let num = 12;
// let str = String(num);
//
// if (str.length === 2) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 42

// let num = 12;
//
// if (String(num).length === 2) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 43

// let num = '124033'; // берем в кавычки, чтобы обращаться к цифрам
//
// let sum1 = +num[0] + +num[1] + +num[2];
// let sum2 = +num[3] + +num[4] + +num[5];
//
// if (sum1 === sum2) {
//     console.log('суммы равны');
// } else {
//     console.log('суммы не равны');
// }

// task 44

// let month = 123;
//
// if (month >= 3 && month <= 5) {
//     console.log('Весна');
// } else if (month >= 6 && month <= 8) {
//     console.log('Лето');
// } else if (month >= 9 && month <= 11) {
//     console.log('Осень');
// } else if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима');
// } else {
//     console.log('Введите число от 1 до 12');
// }

// task 45

// let str = 'tabcde';
// let first = str[0];
//
// if (first === 'a') {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// task 46

// let num = 45;
// let first = String(num)[0];
//
// if (+first === 1 || +first === 2 || +first === 3) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// task 47

// let num3 = 693;
//
// let findSum = (num) => {
//     let sum = String(num).split('').reduce((a, b) => +a + +b);
//     return sum;
// }
//
// console.log(findSum(num3));

// task 48

// const num6 = 435867;
// const num7 = 126333;
//
// const compareNumSum = (num) => {
//
//     let str = String(num);
//     let strFirstSum = Number(str[0]) + Number(str[1]) + Number(str[2]);
//     let strSecondSum = Number(str[3]) + Number(str[4]) + Number(str[5]);
//
//     if (strFirstSum === strSecondSum) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// }
//
// compareNumSum(num6);
// compareNumSum(num7);
