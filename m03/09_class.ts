class Employee { //es6語法當基底，與es6不同之處，資料成員宣告方式
    Id: number;
    Name: string;
    constructor(id: number, name: string) {
        this.Id = id;
        this.Name = name;
    }
    getInfo() {
        return `${this.Id}:${this.Name}`;
    }

}
let emp: Employee = new Employee(1, "nikk");
console.log(emp.getInfo());