"use strict";
var m04;
(function (m04) {
    //參數設定預設值，無順序性問題
    function add(i, j) {
        if (j === void 0) { j = 0; }
        return i + j;
    }
    console.log(add(80, 90));
    console.log(add(9));
})(m04 || (m04 = {}));
