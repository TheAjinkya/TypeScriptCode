"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
function Echo(arg) {
    return arg;
}
function personEcho(Person) {
    return Person;
}
var p1 = new Person_1.Person("Ajinkya", "Chanshetty", "aajinkya@hotmail.com");
var p2 = new Person_1.Person("vicky", "Chanshetty", "aajinkya@hotmail.com");
var myNumber = Echo(25);
var firstObject = personEcho(p1);
var secondObject = personEcho(p2);
console.log("The My Number value is: ", myNumber);
console.log("The First Object value is: ", firstObject);
console.log("The Second Object value is: ", secondObject);
