var promiseToClean = new Promise(function (resolve, reject) {
    var isClean = false;
    if (isClean) {
        resolve("Cleaned!");
    }
    else {
        reject("Not Clean");
    }
});
promiseToClean.then(function (response) {
    console.log(response);
})["catch"](function (result) {
    console.log(result);
});
