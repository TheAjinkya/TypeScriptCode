class Student {

firstName : string;
lastName : string;
contact : number;

constructor(firstName : string, lastName : string, contact : number){

this.firstName = firstName;
this.lastName = lastName;
this.contact = contact;

}

displayName(){

console.log("The Name of the Student is: "+ this.firstName +" "+this.lastName)

}

}

let s1 = new Student("Ajinkya", "Chanshetty", 1);
let s2 = new Student("vicky", "Chanshetty", 1);

s1.displayName();
s2.displayName();

