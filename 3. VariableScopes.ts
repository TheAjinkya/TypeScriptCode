let globalVal : number =  10000;

class Demo{

globalVal : number = 99999;

classVal : number = 70000;


display() : void {

var functionalVal : number = 11111;

var globalVal : number = 22222;

console.log("The Global value inside Class: "+ this.globalVal);
console.log("The Global value inside Class Function: "+ globalVal);

}

}

function display() : void {

console.log("The External Function will give you the Global Value: "+ globalVal)

}

var d = new Demo();

d.display();

display();

