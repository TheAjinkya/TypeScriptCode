//The Muliple inheritance is not allowed in the typescript. But you can create a class where you can add two classes // at the same time. 


class Animal {

eat(): string {

return "I'm Breathing.."

}

}

class Mammals extends Animal{

breathe(): string {

return "I'm breathing.."

}

move() : string {

return "I'm Moving like a Mammal!" 

}

}

class WingedAnimals extends Animal {

fly(): string {

return "I'm flying.."

}

move() : string {

return "I'm Moving like a WIngedAnimal!" 

}

}

//Since TS doesnt allow multiple Inheritance, they provide 'Mixins' for the same. 

//This function is mandatory to be there inside your application

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}



class Bat implements Mammals, WingedAnimals {

eat: ()=> string
breathe: ()=> string
fly: ()=> string
move: ()=> string

}

applyMixins(Bat, [WingedAnimals, Mammals])

var bt = new Bat();
var an = new Animal();
var mm = new Mammals();
var wn = new WingedAnimals();
let message

// message = bt.eat();
//console.log("The message of the eat method on the Bat Class from the Animal class is "+ message)


message = bt.breathe();
console.log("The message on the Bat Class from the Mammals class is "+ message)

message = bt.fly();
console.log("The message on the Bat Class from the WingedAnimals class is "+ message)

message = bt.move();
console.log("The message on the Bat Class from the Mammals/WingedAnimals class is "+ message)


// Mixins have following limitations: 
// 1. The base classes should be from the inheritance level one. 
// 2. Only one 
