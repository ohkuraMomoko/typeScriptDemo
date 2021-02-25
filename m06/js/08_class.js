"use strict";
var mod06;
(function (mod06) {
    var CommonClass = /** @class */ (function () {
        function CommonClass() {
        }
        return CommonClass;
    }());
    var c = new CommonClass();
    c.add = function (i, j) { return i.toUpperCase() + j.toUpperCase(); };
    console.log(c.add("aaa", "bbb"));
    var d = new CommonClass();
    d.add = function (i, j) { return i + j; };
    console.log(d.add(11, 66));
})(mod06 || (mod06 = {}));
