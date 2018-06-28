var a;
var b;
var sum;
function add(a, b) {
    return a + b;
}
//This function will accept only two parameters as defined in its definition. It wont accept one more or less
sum = add(22, 55);
console.log("The Addition is:" + sum);
//This function will accept the exact data types mentioned as in the definition
function sub(a, b) {
    return a - b;
}
sum = sub(35, 5);
console.log("The Substraction is " + sum);
// This function has optional third and fouth parameter. This does not make any impact on result
function multi(a, b, c, d) {
    return a * b;
}
sum = multi(11, 22, 33);
console.log("The multiplication is: " + sum);
function div(a, b, c) {
    if (c === void 0) { c = 0; }
    return (a * c) / b;
}
sum = div(22, 2, 2);
console.log("This is the divission " + sum);
