class CommonClass {

firstName : string;
lastName : string;

constructor(firstName : string, lastName : string){

this.firstName = firstName;
this.lastName = lastName;

}

displayName(): void {

console.log("This is the Object from the Common Class with values" + this.firstName + this.lastName)

}


}


class ChildClass extends CommonClass{


firstName : string; 
lastName : string;

displayName(): void {

console.log("This is the Method from the Child Class with values" + this.firstName + this.lastName)

}


}

var c1 = new CommonClass("Ajinkya", "Chanshetty");

var c2 = new ChildClass("Vicky", "Chanshetty");

c1.displayName()
c2.displayName()

