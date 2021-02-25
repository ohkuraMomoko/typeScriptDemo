namespace mod06 {
    interface printData<T> {
        (p: T): void;
    }
    let f1: printData<number> = i => console.log(i + 100);
    f1(50);
    let f2: printData<string> = s => console.log(s.toUpperCase());
    f2("aaa");
}