namespace m04 {
    // let add = (i: number, j: number) => i + j;
    // add = (i, j) => i - j
    // console.log(add(10, 20));
    //==========
    //函式型別宣告
    let add: (i: number, j: number) => number;
    add = (x, y) => x + y;
    console.log(add(20, 10));
}