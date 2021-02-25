"use strict";
let book = { title: "ts", price: 200 };
// book.id=1 //error 超出定義範圍 不能額外擴充
// 使用推測
let book2;
book2 = {
    title: 'js',
    price: 500
};
console.log(book.title, book.price);
let books = [book, book2];
books.forEach(element => {
    console.log(element.title, element.price);
});
