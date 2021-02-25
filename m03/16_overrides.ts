namespace m11 {
    class Employee { 
        //若要複寫要設定為public
        //protected為繼承的才可以使用
        constructor(protected id: number, public name: string, public sex?: string) {
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
    }

    class  Sale extends Employee{
        constructor(id: number, name: string, public bouns: number) {
            super(id,name);
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
}