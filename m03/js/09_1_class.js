"use strict";
class Employee2 {
    constructor() {
        this.Id = 1;
        this.Name = "aa";
    }
    getInfo() {
        return `${this.Id}:${this.Name}`;
    }
}
let emp2 = new Employee2();
console.log(emp2.getInfo());
