"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
let cc = Color.blue;
display(cc);
console.log(Color[cc]);
function display(color) {
    switch (color) {
        case Color.blue:
            console.log("blue...");
            break;
        case Color.red:
            console.log("red...");
            break;
        case Color.green:
            console.log("green...");
            break;
    }
}
