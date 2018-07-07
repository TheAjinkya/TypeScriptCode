export class Person{


constructor(public firstName : string, public lastName : string, public email : string){

}

getFullName(firstName, lastName, email){

return (this.firstName + " "+ this.lastName + " "+ this.email)

}

}

// So as to use the same class repeatedly, we have to export it and it can also be a module 