namespace m6 {
    interface Cat {
        walk(): void;
    }
    interface Person {
        walk(): void;
        work(): void;
    }
    let c: Cat = {
        walk() {
            console.log("Cat walk");
        }
    }
    let p: Person = {
        walk() {
            console.log("Person walk");
        },
        work() {
            console.log("Person work");
        }
    }
    function getAnimal(a: any): Cat | Person {
        return a;
    }
    let a1 = getAnimal(c);
    let a2 = getAnimal(p);
    a1.walk();
    a2.walk(); //僅能使用兩種都有的成員
}