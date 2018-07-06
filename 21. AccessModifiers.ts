class Person{

constructor(private firstName : string, private lastName : string, private contact : number){

}

getFullName(){

return(this.firstName +" "+this.lastName)

}

getFirstName() : string{

return this.firstName;

}

setFirstName(firstName){

this.firstName = firstName;

}

getLastName() : string{

return this.lastName;

}

setLastName(lastName){

this.lastName = lastName;

}

getContact() : number{

return this.contact;

}

setContact(contact){

this.contact = contact;

}

}


class Teacher extends Person{

email : string

constructor(firstName, lastName, contact, email){

super(firstName, lastName, contact)
this.email = email

}

}


var p1 = new Person("Ajinkya", "Chanshetty", 9898);
var t1 = new Teacher("Vicky", "Chanshetty",9999, "aajinkya@hotmail.com");

t1.email = "aajinkya@hotmail.com"

console.log("P1 name is "+ p1.getFullName())
console.log("T1 name is "+ t1.getFullName())
