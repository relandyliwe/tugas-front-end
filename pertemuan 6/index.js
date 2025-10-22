//IIFE & Callback function
// 1. IIFE (imediately invoked Expression
//    self executing anonymous function
(function () {
    console.log("hello world");
})();
// IIFE with parameter & return value
(function (fullname) {  
    console.log("hello world"  + fullname);
})("jhon") 

console.log(output)

//2.callback function
// function passed into another function as an argument 

function greetings(callback) {
    callback();
}
//callback function must be an anonymous function
greetings(function () {

});

// callback with parameter  & return value
function greetings(callback) {
    callback("jhon");
}
//callback function must be anonymous function
let output = greetings( function (fullname) {
    return "hello world" + fullname
});

//Exercise #01
//Buatlah program untuk menghitung BMI dimana menggunakan 
//1. IIFE
//2. Callback Function
//yang memiliki parameter dan return value