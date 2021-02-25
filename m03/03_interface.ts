let book={title:"ts",price:200}
// book.id=1 //error 超出定義範圍 不能額外擴充
// 使用推測

let book2:{title:string, price: number};
book2={
    title:'js',
    price: 500
}
console.log(book.title,book.price);

interface Book {
    title: string;
    price: number;
}
let books:Book[]=[book,book2];
books.forEach(element => {
    console.log(element.title, element.price);
});