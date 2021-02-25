"use strict";
var mod03;
(function (mod03) {
    let employee = {
        empName: "Mary",
        age: 29,
        showInfo: (function () {
        })
    };
    employee.showInfo = function () {
        return this.empName + ", " + this.age;
    };
    console.log(employee.showInfo());
})(mod03 || (mod03 = {}));
(function (mod03) {
    let employee;
    employee = {
        age: 29,
        empName: "Tony",
        showInfo: function () {
            return this.empName + ", " + this.age;
        }
    };
    console.log(employee.showInfo());
})(mod03 || (mod03 = {}));
