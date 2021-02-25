class Employee2 { //typescript可以省略constructor，編譯會自行加上
    Id=1;
    Name="aa";
    getInfo() {
        return `${this.Id}:${this.Name}`;
    }

}
let emp2: Employee2 = new Employee2();
console.log(emp2.getInfo());