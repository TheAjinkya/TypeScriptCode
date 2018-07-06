function echo(arg : any) : any {

return arg

}

// var result : string = echo(10)
//Argument of type '10' is not assignable to parameter of type 'string'.

var result : number = echo("Ajinkya")
console.log("Here the 'result' variable is declared with type number and still it stores a string value as: ", result)

// But in this case as we have set the return types and argument types to 'any', hence anything will get assigned to anything.

//Hence to avoid  this problem
function repo<T>(arg : T) : T {

return arg

}

var myVal = repo("Ajinkya")

console.log("The type of the 'myVal' variable here is: " + typeof(myVal) + " "+ "and the value is: "+myVal)
