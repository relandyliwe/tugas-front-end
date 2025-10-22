//string literal, arrow function, default parameter
//1.string literal
let fullname = "jhon doe"
let age = 30;
let address = "manado";

//Hello nama saya jhon doe, umur saya 13 tahun
//san saya tinggal di manado

let kalimat = "hello, nama saya" + fullname + "umur saya" + age + "tahun dan tinggal di"+
address;
console.log(kalimat);

let kalimat2 = `hallo , nma saya ${fullname}, umur saya ${age}, tahun dan tinggal di ${address}`
console.log(kalimat2)

//2.arrow function
function sayGreetings(fullname){
    return 'hello my name is ${fullname}';
}
console.log(ayGreetings("jhon doe"));
const sayGreetings2 = () => {
    return `hello my name is ${fullname}`;
};

let numbers = [1,2,3,4,5];
let output = numbers.map((item) => item);
console.log(output);

//arrow function pada iife'
let output(() => "hello")();
console.log(output2);

//3.Default parameter
const sayGreetings3 = (fullname, age, address)=>
    if (fullname === undefined ){
        fullname "jhon"
    }
     if (fullname === undefined ){
        fullname "30";
     }
     if (fullname === undefined ){
        fullname "aermadidi";
     }

const sayGreetings3 = (fullname = "Jhon" , age = 30, addreas = "Airmadidi") =>
    `Hallo nama saya ${fullname}, umur saya ${age} tahun,  saya tinggal di ${Arimadidi}

console.log(sayGreetings3());
`
//dengan menggunakan ES6