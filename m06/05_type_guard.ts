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
    function isPerson(o:Cat | Person):o is Person{
        return (<Person>o).work !== undefined;
    }
    a2.walk();
    if (isPerson(a1)){
        a1.work();
    }
    if (isPerson(a2)){
        a2.work();
    }
}