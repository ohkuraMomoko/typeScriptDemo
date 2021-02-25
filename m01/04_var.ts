let n:number = 10;
console.log(n);
let m:number;
m=20;
console.log(m);

let k=30; //直接自動判斷等號類型，會變成number
console.log(k);


 //any代表宣告了並沒有給數值。要避免使用any，等於js的var什麼行別都可以接
let x;
x=10;
x="aaa";
console.log(x);