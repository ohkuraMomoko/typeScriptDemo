namespace m07 {
    let employee = {
        empName: "Mary",
        age: 29,
        showInfo: function () { } //無實作的空方法，給他一個值，才會推論出有方法
    }; // 宣告時沒有給型別，給數值之後已經決定型別//型別推論

    //在此實作該方法的內容
    employee.showInfo = function () {
        return this.empName + ", " + this.age;
    };
    console.log(employee.showInfo());
}