//Destructering & Module
//1. Destruntering Array & Object

//Structering Array/membuat Array
let numbers = [1, 2, 3, 4, 5];

//Destructering Array 
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

// const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1, num2, num3, num4, num5);

//Destructering sebagian item & Array
// const [, num1, num3, ,] = numbers;
// console.log(num2, num3);

// // //Destructering dengn rest parameter
// const [, num2, num3] = numbers;

// console.log(num2, num3); // 20 30
// //Destructering Object
// const student1 = {
//     fullName: "John",
//     age: 25,
//     status: "Active",
// };

// const fullName = student1.fullName;
// const age = student1.age;
// const status = student1.status;

// const { fullName, age, status } = student1;
// console.log(fullName, age, status);

//Destructering sebagian item
// const { age } = student1;
// console.log( age );

//Destructering Onject & rest
//Tipe data rest parameter pada object adalah bertipe Object
const { fullName, ...rest }= student1;
console.log(fullName);
console.log(rest);

//2.module
import {student, angka} from './data.Js';

console.log(student);
console.log(angka);