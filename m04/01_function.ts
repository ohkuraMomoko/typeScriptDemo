namespace m04 {
    let hello: Function = function () {
        console.log("hello");
    }
    hello();

    let add = (i: number, j: number) => i + j;
    let add2: Function = (i: number, j: number) => i + j;

    console.log(add(10, 20));
    console.log(add2(10, 20));
}