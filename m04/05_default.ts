namespace m04 {
    //參數設定預設值，無順序性問題
    function add(i: number, j = 0): number {
        return i + j;
    }
    console.log(add(80, 90));
    console.log(add(9));
}