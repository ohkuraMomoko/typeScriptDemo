namespace m11 {
    class Employee { 
        //省略裡面的繁瑣this宣告
        constructor(private id: number, public name: string) {
            // this.id = id;
            // this.name = name;
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
    
    }
    let emp: Employee = new Employee(1, "nikk");
    console.log(emp.getInfo());
}