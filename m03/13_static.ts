namespace m11 {
    class Employee { 
        static count = 0; //宣告靜態資料成員
        //建立物件之後自動加一，自動累加功能
        constructor(public id: number, public name: string) {
            Employee.count++
        }
        getInfo() {
            return `${this.id}:${this.name} count:${Employee.count}`;
        }
    
    }
    let emp: Employee = new Employee(1, "nikk");
    console.log(emp.getInfo());
    let emp2: Employee = new Employee(2, "bb");
    console.log(emp2.getInfo());
}