// import "isomorphic-fetch";
namespace md06 {
    async function callAPI() {
        let response = await fetch("aaa.txt");
        let result = await response.text();
        console.log(result);
    }
    callAPI();
    console.log(3);
}