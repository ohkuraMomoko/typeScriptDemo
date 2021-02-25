"use strict";
var m11;
(function (m11) {
    class Employee {
        //省略裡面的繁瑣this宣告
        constructor(id, name) {
            this.id = id;
            this.name = name;
            // this.id = id;
            // this.name = name;
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
    }
    let emp = new Employee(1, "nikk");
    console.log(emp.getInfo());
})(m11 || (m11 = {}));
