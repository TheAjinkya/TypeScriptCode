function addition(...num: number[]): number{

var result = 0;

for( var i = 0; i < num.length; i++){

result += num[i]

}

return result 

}

let output = addition(22)

console.log("The output with two params is: " + output);

output = addition(22,22,22)

console.log("The output with three params is: " + output);