var coordinate: [number, number]; //指定個別型別
coordinate = [10,20]; //tuple限定個數
console.log(coordinate[0],coordinate[1]);

var data:[number,string ,Date]=[100,"aaa",new Date()];
console.log(data[0]+50, data[1].toUpperCase(), data[2].toLocaleTimeString("zh-tw"));