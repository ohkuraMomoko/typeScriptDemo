"use strict";
function getColor(c) {
    //判斷式會影響型別判斷
    if (typeof c === "string") {
        console.log(c);
    }
    else {
        console.log(c.color);
    }
}
getColor("green");
getColor({ color: "blue" });
