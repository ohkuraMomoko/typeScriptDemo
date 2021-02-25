"use strict";
//避免變數衝突的方法
//namespace or module
var m10;
(function (m10) {
    // let i:number=10;
    // i=null;
    let i = 10; //union type 代表兩種類型都可以接
    i = null;
    console.log(i);
    //===========================
    //  let j:number;
    //  console.log(j);
    let j;
    console.log(j);
})(m10 || (m10 = {}));
