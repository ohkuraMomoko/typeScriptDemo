namespace mod06 {
    class CommonClass<T> {
        //加上!代表告訴編譯器不必檢查，繞過初始值檢查
        add!: ((x: T, y: T) => T);
    }
    let c = new CommonClass<string>();
    c.add = (i, j) => i.toUpperCase() + j.toUpperCase();
    console.log(c.add("aaa", "bbb"));

    let d = new CommonClass<number>();
    d.add = (i, j) => i + j;
    console.log(d.add(11, 66));
}