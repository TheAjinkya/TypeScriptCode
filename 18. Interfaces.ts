interface Person {

firstName : string;
lastName : string;
display:()=> string

}

var ajinkya : Person = {

firstName : "Ajinkya",
lastName : "Chanshetty",
display: ()=>{return ("Hey there! I am "+ ajinkya.firstName +" "+ajinkya.lastName)}

}

console.log(ajinkya.display());