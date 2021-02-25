"use strict";
/// <reference path="03_namespace.ts"/>
/// <reference path="04_var.ts"/>
var emp = new HR.Employee(123, 'n');
console.log(emp.getInfo());
//alias別名，非必要設定
var hr = HR.Employee;
var emp2 = new HR.Employee(11, 'niii');
console.log(emp2.getInfo());
//編譯出來預設吃es5，沒有讀取config
//產生client.js
//tsc -outfile client.js 05_client.ts 
//tsc--target es6 -outfile client.js 05_client.ts 
//如果用tsconfig.json方法只輸出單一檔案，就不用加上reference來合併檔案編譯
