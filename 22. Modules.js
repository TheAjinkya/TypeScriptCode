var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFullName = function (firstName, lastName, email) {
        return (this.firstName + " " + this.lastName + " " + this.email);
    };
    return Person;
}());
function Echo(arg) {
    return arg;
}
function personEcho(Person) {
    return Person;
}
var p1 = new Person("Ajinkya", "Chanshetty", "aajinkya@hotmail.com");
var myNumber = Echo(25);
var myObject = personEcho(p1);
console.log("The My Number value is: " + myNumber);
console.log("The My Object value is: " + myObject);
