class Person {

name: string

constructor(name: string){

this.name = name;

}

getName(): string {

return this.name;

}

//When you put the same function with a time delay, the 'this' pointer looses its pointing during the time and hence we use arrow function for the same. 

getDelayedName(){

setTimeout(function(){

return this.name;

}, 2000)

}

//Here's the syntax for the Arrow Function. Instead of the annonymous function we use the arrow like identation.

getDelayedNameAgain() {

setTimeout(() =>{

console.log("My Name is " + this.name);

}, 2000)

}
}
var p1 = new Person("Ajinkya");

let myName = p1.getName();
let myDelayedName = p1.getDelayedName()
p1.getDelayedNameAgain()

console.log("My Name is "+ myName)
console.log("My Name is "+ myDelayedName)
