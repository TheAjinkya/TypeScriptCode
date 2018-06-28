var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CommonClass = /** @class */ (function () {
    function CommonClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CommonClass.prototype.displayName = function () {
        console.log("This is the Object from the Common Class with values" + this.firstName + this.lastName);
    };
    return CommonClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildClass.prototype.displayName = function () {
        console.log("This is the Method from the Child Class with values" + this.firstName + this.lastName);
    };
    return ChildClass;
}(CommonClass));
var c1 = new CommonClass("Ajinkya", "Chanshetty");
var c2 = new ChildClass("Vicky", "Chanshetty");
c1.displayName();
c2.displayName();
