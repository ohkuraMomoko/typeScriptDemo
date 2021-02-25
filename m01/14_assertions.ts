namespace m14 {
    let a: any = 100.222;
    //強制轉型
    //無法確保執行時不會有問題
    //由開發人員告知編譯器的類型
    console.log((<number>a).toFixed(1));
    console.log((a as number).toFixed(1));
}