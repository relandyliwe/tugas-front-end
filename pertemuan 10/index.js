//rest parameter & spread operator
//1. rest parameter

//function tanpa rest parameter
const funct1 = (param1. param2,param3,param4,param5) => {
    console.log(param1,param2,param3,param4,param5);
    let hasil = 0;
    arr.forEach((item)) => (hasil +=));
    console.log(arr);
};


//a.rest parameter bertipe array
//b.rest parameter harus ada di terakhir dari parameter list

funct1("A", "B","c","e")
const funct1 = (...rest = => {
    let hasil = 0;
    rest.forEach((item) => (hasil += item));
    console.log(hasil);

}

funct1(1,2,3,4,5,6,7,8,9,10,11,12,13);

//spread Operator
const number = [1,2,3,4,5];
console.log(numbers)
console.log(...numbers)

//kegunaan spread operator pada array
//1. duplikasi array
number.push(6)
const numbes2 = number;
console,log(numbers2)
//2.menggabungkan array
let arr1 = [1,2,3];
let arr2 = [3,5,6];
let arr3 = [7,8,9];

let combineArr1 = arr1.concat(arr2, arr3)
console.log
let combineArr2 = [...arr1, ...arr2, ...arr3]
console.log(combineArr2);

//kegunaan spread operatior pada object
//1.duplikasi object
const student = {
    fisrtName: "jhon",
    status "Active",
};

const student2 ={...student,address: "manado" };
console.log(student2);

//2.menggabungkan object
const obj1={a: 1, b: 2};
const obj2={c: 3, d: 4};

const combineobj = {...obj1, onj2 };
console.log = {...obj1, obj2 };
console.log = {combineObj};