namespace m02 {
    //考慮重複使用，可規劃interface
    interface Myfun {
        x:number;
        y:number;
    }
    //function declaration 宣告
    function func1(p:Myfun) {
        console.log(p.x, p.y);
    }

    //function expression
    let func2=function (p:Myfun) {
        console.log(p.x, p.y);
    };

    //es6 arrow function
    let func3 = (p: Myfun) => {
        console.log(p.x, p.y);
    };
    func1({ x: 10, y: 20 });
    func2({ x: 11, y: 20 });
    func3({ x: 12, y: 20 });
}