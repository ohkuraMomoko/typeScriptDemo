namespace m04 {
    interface myfun {
        x: number;
        y?:number; //選擇性的屬性
    }

    //Boolean(undefined) 會等於false
    //Booleam(0) 也會等於false
    //用===才能嚴格比較
    let fun1 = (p: myfun) => {
        if(p.y === undefined){
            console.log(p.x);
        }else {
            console.log(p.x,p.y);
        }
    }

    fun1({x: 10, y:5});
    fun1({x:5});
}