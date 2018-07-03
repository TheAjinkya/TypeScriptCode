declare var Promise : any;


let cleaningRoomStarts = function(){

return new Promise(function(resolve, reject){

resolve ("Cleaning starts.. ")

})

}


let cleanedRoom = function(message){

return new Promise(function(resolve, reject){

resolve (message + " and it Ends now. ")

})

}

let wonIceCream = function(message){

return new Promise(function(resolve, reject){

resolve (message + " Congrats! you won the IceCream for it!")

})

}

cleaningRoomStarts().then(function(response){

return cleanedRoom(response)

}).then(function(response){

return wonIceCream(response)

}).then(function(response){

console.log(response +" Loop Ends")

})