function addition(test : (string | number | boolean)) : void {

switch(typeof test){

case "string" : 

console.log("Hello "+ test)
break;

case "number" : 

console.log("Your Age is "+ test)
break;

case "boolean" : 

console.log(`Yes that's ${test} !`)
break;

}

}

addition("Ajinkya")
addition(22)
addition(true)

