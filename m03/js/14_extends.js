"use strict";
var m11;
(function (m11) {
    class Employee {
        constructor(id, name, sex) {
            this.id = id;
            this.name = name;
            this.sex = sex;
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
    }
    class Sale extends Employee {
        constructor(id, name, bouns) {
            super(id, name);
            this.bouns = bouns;
        }
    }
    let emp = new Sale(1, "nikk", 300);
    console.log(emp.getInfo(), emp.bouns);
})(m11 || (m11 = {}));
