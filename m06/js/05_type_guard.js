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
    function isPerson(o) {
        return o.work !== undefined;
    }
    a2.walk();
    if (isPerson(a1)) {
        a1.work();
    }
    if (isPerson(a2)) {
        a2.work();
    }
})(m6 || (m6 = {}));
