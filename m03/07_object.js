let employee = {
    empName: "Mary",
    age: 29
};

//可以直接追加方法
employee.showInfo=function () {
    return this.empName+", "+this.age;
};
console.log(employee.showInfo());