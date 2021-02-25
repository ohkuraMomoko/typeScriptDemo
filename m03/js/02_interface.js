"use strict";
var m02;
(function (m02) {
    //function declaration 宣告
    function func1(p) {
        console.log(p.x, p.y);
    }
    //function expression
    let func2 = function (p) {
        console.log(p.x, p.y);
    };
    //es6 arrow function
    let func3 = (p) => {
        console.log(p.x, p.y);
    };
    func1({ x: 10, y: 20 });
    func2({ x: 11, y: 20 });
    func3({ x: 12, y: 20 });
})(m02 || (m02 = {}));
