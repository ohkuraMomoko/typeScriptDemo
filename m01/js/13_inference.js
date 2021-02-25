"use strict";
var m13;
(function (m13) {
    let i = 10; //用給予的數值來推論資料型別
    //傳入的參數，也要給值
    function dd(i, j) {
        return i + j;
    }
    console.log(dd(1, 5));
    //若function有給預設值，也可以省略宣告型別
    function cc(i = 5, j = 6) {
        return i + j;
    }
    console.log(cc(1, 5));
})(m13 || (m13 = {}));
