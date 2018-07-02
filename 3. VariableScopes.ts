let myGlobalVal = 100000;


class myClass {

myGlobalVal = 99999;


getValue():void {

let myGlobalVal = 888888;

console.log("Global value inside the Class is: "+ this.myGlobalVal)
console.log("Global value inside the Function of the Class is: "+ myGlobalVal)

}

}

function globalFunction(){
console.log("Global value out of the class is: "+ myGlobalVal)
}

var m1 = new myClass();

m1.getValue();
globalFunction();