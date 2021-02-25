"use strict";
var mod03;
(function (mod03) {
    let add = function (i, j) {
        return i + j;
    };
    let sub = (i, j) => i - j;
    console.log(add(100, 200));
    console.log(sub(500, 300));
})(mod03 || (mod03 = {}));
(function (mod03) {
    let fun = {
        Add: (x, y) => x + y,
        Sub: (x, y) => x - y
    };
    console.log(fun.Add(1, 3));
    console.log(fun.Sub(1, 3));
})(mod03 || (mod03 = {}));
