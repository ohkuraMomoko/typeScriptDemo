enum Color {
    red = 1,
    blue = 2,
    green = 3
}

let cc: Color = Color.blue;

display(cc);
console.log(Color[cc]);

function display(color: Color) {
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