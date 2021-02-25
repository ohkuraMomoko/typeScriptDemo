export let projectName = "HR 123333";
export default class Employee {
    constructor(public id: number, public name: string) { };
    getInfo() {
        return `${this.id} , ${this.name}`;
    }
}