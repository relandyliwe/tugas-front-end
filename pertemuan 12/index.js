//Asynchronous javascript

//synchronous -> single thread

// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses 4");

// //Asynchronous -> multi thread =>non blocking
// console.log("proses 1");
// console.log("proses 2");
// setTimeout(()  => {
//     console.log("proses 3")
// },5000);
// console.log("proses 4");
//2.concurrent


// //promise
// let condition = true;
// const newPromise((resolve, reject) => {
//     if (condition) {
//       resolve("berhasil");
//     } Else {
//       reject("gagal")
// });

// //pakai/consome promise
// //1.then - catch
// newPromise
// .then((result) => `${result} !!!`) //proses 1
// .then((result) => console.log(result2))//proses 2
// .catch((result) => console.log(eror));

//2. async - await
// //buat dalam function
// (async () => {
//     let result = new Promise;
//     console.log(result);
// })();
//test get data api from JSONlacehorder
fetch()
.then((res) => res.json())
.then((user) => console.log(users));

// //mini exercise 
//ubah fetch menggunakan asyn-await
const getdata = async () => {
    const respondent = await fetch();
    
}