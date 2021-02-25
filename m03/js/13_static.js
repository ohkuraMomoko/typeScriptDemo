"use strict";
var m11;
(function (m11) {
    class Employee {
        //建立物件之後自動加一，自動累加功能
        constructor(id, name) {
            this.id = id;
            this.name = name;
            Employee.count++;
        }
        getInfo() {
            return `${this.id}:${this.name} count:${Employee.count}`;
        }
    }
    Employee.count = 0; //宣告靜態資料成員
    let emp = new Employee(1, "nikk");
    console.log(emp.getInfo());
    let emp2 = new Employee(2, "bb");
    console.log(emp2.getInfo());
})(m11 || (m11 = {}));
