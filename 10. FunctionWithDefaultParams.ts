function addition(foo: number, bar : number, foobar: number = 10){

var result = foo + bar;

if(foobar !== void 0){                                 // 'void 0' and undefined are one and the same for compiler 

result = result + foobar

}

return result 

}

let output = addition(22,55)

console.log("The output with two params is: " + output);

output = addition(22,55, 99)

console.log("The output with three params is: " + output);