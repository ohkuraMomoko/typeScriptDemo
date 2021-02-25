"use strict";
var m04;
(function (m04) {
    //Boolean(undefined) 會等於false
    //Booleam(0) 也會等於false
    //用===才能嚴格比較
    let fun1 = (p) => {
        if (p.y === undefined) {
            console.log(p.x, p.y);
        }
        else {
            console.log(p.x);
        }
    };
    fun1({ x: 10, y: 5 });
    fun1({ x: 5 });
})(m04 || (m04 = {}));
