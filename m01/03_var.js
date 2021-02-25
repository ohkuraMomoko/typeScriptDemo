console.log(i); // var 被提升，輸出為undfeined
var i =10;//var全域都有用
console.log(i); //10

var j =10;
var j=20;
console.log(j); // var 變數直接被覆蓋

console.log(i); //let不允許未宣告就使用
let i =10; //區域變數
console.log(i);

let j = 20; //let不允許重複變數
let j =30;
console.log(j);