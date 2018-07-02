function addition(foo: number, bar : number, foobar?: number){

var result = foo + bar;

if(foobar !== undefined){

result = result + foobar

}

return result 

}

let output = addition(22,55)

console.log("The output with two params is: " + output);

output = addition(22,55, 99)

console.log("The output with three params is: " + output);