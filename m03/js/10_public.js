"use strict";
var m10;
(function (m10) {
    class Employee {
        constructor(id, name) {
            this.Id = id;
            this.Name = name;
        }
        getInfo() {
            return `${this.Id}:${this.Name}`;
        }
    }
    let emp = new Employee(1, "nikk");
    console.log(emp.getInfo());
})(m10 || (m10 = {}));
