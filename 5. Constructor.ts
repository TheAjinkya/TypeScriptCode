class Person {

firstName : string;
lastName : string;

constructor(){

var s1 = new Student();
var e1 = new Employee();

}

getFullName() : void{

console.log(this.firstName +" "+this.lastName)

}
}

class Student{

firstName;
lastName;

}


class Employee{

firstName;
lastName;

}

var p1 = new Person("Ajinkya", "Chanshetty");

p1.getFullName();