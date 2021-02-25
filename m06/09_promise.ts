// import "isomorphic-fetch";
namespace md06 {
    function callAPI() {
        fetch("aaa.txt")
            .then(response => response.text())
            .then(result => console.log(result));
    }
    callAPI();
    console.log(3);
}