namespace m11 {
    class Employee { 
        constructor(private id: number, private name: string, private sex?: string) {
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
    }

    class  Sale extends Employee{
        constructor(id: number, name: string, public bouns: number) {
            super(id,name);
        }
    }
    let emp = new Sale(1, "nikk", 300);
    console.log(emp.getInfo(), emp.bouns);
}