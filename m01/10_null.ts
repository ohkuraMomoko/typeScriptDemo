//避免變數衝突的方法
//namespace or module
namespace m10 {
    // let i:number=10;
    // i=null;

    let i: number | null = 10; //union type 代表兩種類型都可以接
    i = null;
    console.log(i);
    //===========================
    //  let j:number;
    //  console.log(j);

    let j: number | undefined;
    console.log(j);
}
