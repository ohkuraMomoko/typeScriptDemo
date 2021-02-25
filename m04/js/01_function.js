"use strict";
var m04;
(function (m04) {
    var hello = function () {
        console.log("hello");
    };
    hello();
    var add = function (i, j) { return i + j; };
    var add2 = function (i, j) { return i + j; };
    console.log(add(10, 20));
    console.log(add2(10, 20));
})(m04 || (m04 = {}));
