class Person {

firstName : string = "Ajinkya";
lastName : string = "Chanshetty";

displayName(){

console.log("The name is: "+this.firstName +" "+this.lastName)

}

}

function displayName(){

console.log("The name is the Global function with the same name")

}


var p1 = new Person();
p1.displayName();
displayName();
