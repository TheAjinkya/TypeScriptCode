"use strict";

function myFunction() : void {

const newBar : number = 9999;

myName = "Ajinkya"

if(true){

var bar : number = 0;

let myBar : number = 1000;

const newBar : number = 4545;

}


console.log("The variable myName is declared at the bottom and its value is assigned before its declaration at the top. But still accessible at the top line as : "+ myName)

console.log("The value of Bar is: "+ bar)

//When you declare the function with the Let and const keyword, it is restricted to the block scope and prevents the variable hoisting 

console.log("The value of myBar is: "+ newBar);

//Comment below line for successful compilation


}


myFunction();

var myName : string;