"use strict";
var m11;
(function (m11) {
    class Employee {
        //若要複寫要設定為public
        //protected為繼承的才可以使用
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
        getInfo() {
            // return `id:${this.id} name:${this.name} bouns:${this.name}`;
            return `${super.getInfo()} bouns:${this.name}`;
        }
    }
    let emp = new Sale(1, "nikk", 300);
    console.log(emp.getInfo(), emp.bouns);
    console.log(emp instanceof Sale);
    console.log(emp instanceof Employee);
    console.log(emp instanceof Object);
    console.log(emp.toString());
    console.log(emp.getInfo());
})(m11 || (m11 = {}));
