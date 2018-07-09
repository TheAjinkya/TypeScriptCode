"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Person.prototype.getFullName = function (firstName, lastName, email) {
        return (this.firstName + " " + this.lastName + " " + this.email);
    };
    return Person;
}());
exports.Person = Person;
