interface Shape {
    width: number;
    height: number;
    getArea(): number;
}
//implements 用來繼承interface，類似規範，後續該class會有統一用法/產出?
class Rent implements Shape {
    constructor(public id: number, public width: number, public height: number) {

    }
    getArea(): number {
        return this.width * this.height;
    }
}
class Rent2 implements Shape {
    constructor(public width: number, public height: number) {
    }
    getArea(): number {
        return this.width * this.height;
    }
}
//物件使用方式受限在型別
let s: Shape = new Rent(1, 10, 20);
console.log(s.width, s.getArea());