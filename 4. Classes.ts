class Student{


firstName : string = "Ajinkya"
lastName : string = "Chanshetty"
contact : number = 9998989899;
email : string = "aajinkya@hotmail.com"

display(): void {

console.log("The name of the student is : "+ this.firstName + " "+ this.lastName)

}

}

function display() {

console.log("This function is out of the Class")

}


var s1 = new Student();

s1.display();

display()