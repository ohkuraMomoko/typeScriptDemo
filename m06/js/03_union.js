"use strict";
var m6;
(function (m6) {
    var c = {
        walk: function () {
            console.log("Cat walk");
        }
    };
    var p = {
        walk: function () {
            console.log("Person walk");
        },
        work: function () {
            console.log("Person work");
        }
    };
    function getAnimal(a) {
        return a;
    }
    var a1 = getAnimal(c);
    var a2 = getAnimal(p);
    a1.walk();
    a2.walk(); //僅能使用兩種都有的成員
})(m6 || (m6 = {}));
