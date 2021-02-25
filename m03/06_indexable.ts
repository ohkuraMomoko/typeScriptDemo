namespace m06{
    interface in1 {
        readonly [index: number]: string; //限制只能讀取無法改動
        length: number; //需自行擴充這個值才有得使用
    }
    let list: in1 = ['aa','bb','cc'];

    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    // list[0] = "nnn"; //只能讀
}