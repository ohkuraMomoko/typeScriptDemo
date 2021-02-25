namespace m10 {
    class Employee { 
        private Id: number; //限制存取方式
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
}