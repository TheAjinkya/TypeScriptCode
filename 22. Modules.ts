class Person{

firstName : string;
lastName : string;
email : string;


getFullName(firstName, lastName, email){

return (this.firstName + " "+ this.lastName + " "+ this.email)

}

}


function Echo<T>(arg : T) : T{

return arg

}


function personEcho<T extends Person>(Person : T) : T{

return Person

}

var p1 = new Person("Ajinkya", "Chanshetty", "aajinkya@hotmail.com")


var myNumber = Echo(25);

var myObject = personEcho(p1);

console.log("The My Number value is: "+ myNumber)
console.log("The My Object value is: "+ myObject)
