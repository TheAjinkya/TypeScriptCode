var cleaningRoomStarts = function () {
    return new Promise(function (resolve, reject) {
        resolve("Cleaning starts.. ");
    });
};
var cleanedRoom = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + " and it Ends now. ");
    });
};
var wonIceCream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + " Congrats! you won the IceCream for it!");
    });
};
cleaningRoomStarts().then(function (response) {
    return cleanedRoom(response);
}).then(function (response) {
    return wonIceCream(response);
}).then(function (response) {
    console.log(response + " Loop Ends");
});
