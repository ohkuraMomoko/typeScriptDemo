"use strict";
// import "isomorphic-fetch";
var md06;
(function (md06) {
    function callAPI() {
        fetch("aaa.txt")
            .then(function (response) { return response.text(); })
            .then(function (result) { return console.log(result); });
    }
    callAPI();
    console.log(3);
})(md06 || (md06 = {}));
