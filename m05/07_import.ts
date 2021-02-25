//as設定別名
// import { Employee as myemp, projectName } from './06_export';
// let emp = new myemp(123, 'n');
// console.log(emp.getInfo());
// console.log(projectName);


//*為萬用字元，代表引入外部模組內的所有成員
// import * as demo from './06_export';
// let emp = new demo.Employee(123, 'n');
// console.log(emp.getInfo());
// console.log(demo.projectName);

//defult
import Employee, { projectName } from './06_export';
let emp = new Employee(123, 'n');
console.log(emp.getInfo());
console.log(projectName);