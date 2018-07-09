//This is the Simplest form of a closure. Because the variables follow the lexical scopes and global functions are accessible inside every other function
function addTo() {
    var inner = 5;
    return inner + passed;
}
var passed = 10;
var result = addTo();
console.log("The result is: " + result);
var sub = function (passed) {
    var subInner = 100;
    var subTo = function (subInner) {
        return subInner + passed;
    };
    return subTo;
};
console.log(sub);
