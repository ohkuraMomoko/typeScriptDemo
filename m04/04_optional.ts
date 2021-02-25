namespace m04 {
    //選擇性參數須放在必要參數之後
    function add(i: number, j?: number): number {
        if (j === undefined) {
            return i;
        } else {
            return i + j;
        }
    }
    console.log(add(80, 90));
    console.log(add(9));
}