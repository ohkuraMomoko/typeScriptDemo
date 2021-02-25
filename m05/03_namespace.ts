namespace HR {
    //全域物件: 加上export之後，外部才可以存取
    export class Employee {
        constructor(public id: number, public name: string) { };
        getInfo() {
            return `${this.id} , ${this.name}`;
        }
    }
}

//IIFE
// let emp = new HR.Employee(123, 'n');
// console.log(emp.getInfo());

// //alias別名，非必要設定
// import hr = HR.Employee;
// let emp2 = new HR.Employee(11, 'niii');
// console.log(emp2.getInfo());