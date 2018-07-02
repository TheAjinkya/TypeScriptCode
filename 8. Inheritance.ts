class Person{

firstName : String;
lastName : String;

constructor(firstName : String, lastName: String){

firstName = this.firstName;
lastName = this.lastName;

}

getFullName() : void{

console.log(this.firstName +" "+ this.lastName)

}

}

var p1 = new Person("Ajinkya", "Chanshetty")
p1.getFullName();