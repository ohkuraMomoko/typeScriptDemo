namespace m07 {
    function add(x: number, y: number): number;
    function add(x: string, y: string): string;
    function add(x: string): string;
    function add(x: any, y?: any): any {
        if (typeof x === "string" && typeof y === "string") {
            return x.toUpperCase() + y.toUpperCase();
        }
        if (y === undefined) {
            // return x;
            console.log((x as string).toUpperCase());
        }
        if (typeof y === "string") {
            return (<string>x).toUpperCase() + ", " + y.toUpperCase();
        }
        return x + y;
    }
    //依照傳入的參數對應該多型函式
    console.log(add(100, 100));
    console.log(add("aaa", "bbb"));
    console.log(add("xxx"));
}