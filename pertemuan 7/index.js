//JavaScript & Loop
//1. JavaScript Conditional
//a. if-else
let suhu = 38
if (suhu >= 37){
    console.log("Suhu Panas");
} else {
    console.log("Suhu Normal");
}

//b. if - else if - else
//Jika nilai 91-100 nilai A
//Jika nilai 81-90 nilai B
//Jika nilai 71-80 nilai C
//Jika nilai <= 70 nilai D
let nilai = 85; 
if (nilai >= 91 && nilai <= 100){
    console.log("Nilai A");
} else if (nilai >= 81 && nilai <= 90){
      console.log("Nilai B");
}
if (nilai >= 71 && nilai <= 80){
    console.log("Nilai C");
}
if (nilai <= 70){
    console.log("Nilai D");
} else {
    console.log("Out Of Range")
}

//3. switch - case

let hari = 1;
switch(hari) {
    case 1: //if (hari = 1)
        console.log("Minggu");
        break;
    case 2:
        console.log("Senin")
        break;
    case 3:
        console.log("Selasa")
        break;
    case 4:
        console.log("Rabu")
        break;
    case 5:
        console.log("Kamis")
        break;
    case 6:
        console.log("Jumat")
        break;
    case 7:
        console.log("Sabtu")
        break;
    default:
        consolo.log("Out Of Range");

}


// 2. javascript loop
//a. for - loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//b. while-loop
let i = 1; 
while (i <= 10) {
    console.log(i);
    i++;
}

//c. do-while loop
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

//array built-in method
let numbers = [1,2,3,4,5];
 
console.log(numbers);

for(let i = 0; i<5;i++){
    console.log(numbers{i});
}

//1. forEach()
numbers.forEach(function(value){
    console.log(value);
});

//2. map()
numbers.forEach(function(value){
    console.log(value);
});
console.log(output);
//3.filter()
let output = numbers.filter()
