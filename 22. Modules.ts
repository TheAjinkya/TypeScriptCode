import { Person } from './Person'

//Above line will import the Person class from the file Person.ts and here extention of the file is not required

function Echo<T>(arg : T) : T{

return arg

}


function personEcho<T extends Person>(Person : T) : T{

return Person

}

var p1 = new Person("Ajinkya", "Chanshetty", "aajinkya@hotmail.com")
var p2 = new Person("vicky", "Chanshetty", "aajinkya@hotmail.com")


var myNumber = Echo(25);

var firstObject = personEcho(p1);
var secondObject = personEcho(p2);

console.log("The My Number value is: ", myNumber)
console.log("The First Object value is: ", firstObject)
console.log("The Second Object value is: ", secondObject)
