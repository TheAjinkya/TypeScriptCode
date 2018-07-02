class Person{

firstName : string = "Ajinkya";
lastName : string = "Chanshetty";

constructor(firstName : string, lastName: string){

this.firstName = firstName;
this.lastName = lastName;

}

getFullName() : void{

console.log("The name of the person is " +this.firstName +" "+ this.lastName)

}

}


class Student extends Person{

firstName : string = "vicky";
lastName : string = "Chanshetty";


constructor(firstName : string, lastName: string){

super(firstName, lastName);

}

getMyName(){

super.getFullName()

}


getFullName() : void{

console.log("The name of the person is "+ this.firstName +" "+ this.lastName)

}

}

var s1 = new Student("Ajinkya", "Chanshetty");
var p1 = new Person("vicky", "Chanshetty");

s1.getMyName();
s1.getFullName();
p1.getFullName();



