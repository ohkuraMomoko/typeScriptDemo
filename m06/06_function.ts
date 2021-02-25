namespace mod06 {
    function printData<T>(p: T): void {
        console.log(p)
    }
    // printData<number>(100);
    printData(100); //等同於上一行
    printData<string>("aaa");
}