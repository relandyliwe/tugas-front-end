// nama : relandy liwe
// IIFE
let bmiIIFE = (function(berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    return "BMI anda: " + bmi;
})(80,2.7)
console.log(bmiIIFE);

function hitungBMI(berat, tinggi, callback){
    return callback(berat, tinggi);
}

let bmiCallback = hitungBMI(80,2.7,function(berat, tinggi){
    return "BMI anda: " + (berat / (tinggi * tinggi));
});
console.log(bmiCallback);