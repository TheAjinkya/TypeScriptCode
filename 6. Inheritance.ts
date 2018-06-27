class CommonClass {

firstName : string;
lastName : string;

displayName(){

console.log("The Name is: "+ this.firstName +" "+ this.lastName )

}

}


class Student extends CommonClass{

firstName : string;
lastName : string;

constructor(firstName : string, lastName : string){

super()
this.firstName = firstName; 
this.lastName = lastName;

}


}


class Employee extends CommonClass{

firstName : string;
lastName : string;

constructor(firstName : string, lastName : string){

super()
this.firstName = firstName; 
this.lastName = lastName;

}

}

let s1 = new Student("Ajinkya", "Chanshetty");

let e1 = new Employee("vicky", "Chanshetty");

s1.displayName()
e1.displayName()