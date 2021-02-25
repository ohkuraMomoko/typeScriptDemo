
namespace m06 {
    //...用來接不定個數
    // function sum(...numbers:number[]) {
    //     let result = 0;
    //     numbers.forEach(i=>result+=i);
    //     return result;
    // }
    // console.log(sum(1,3,4,5));
    // console.log(sum(2,2));

    //允許皆不同型別
    function sum(...numbers:(number|string)[]) {
        let result = 0;
        numbers.forEach(i=>{
            if(typeof i === "string"){
                console.log(i.toUpperCase());
            }else {
                result+=i
            }
        });
        return result;
    }
    console.log(sum(1,"aaa",3));
}