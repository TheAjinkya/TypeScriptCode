declare var Promise : any;

let promiseToClean = new Promise(function(resolve, reject){

let isClean : boolean = false;

if(isClean){

resolve("Cleaned!")

}else{

reject("Not Clean")

}

})

promiseToClean.then(function(response){

console.log(response)

}).catch(function(result){

console.log(result)
});