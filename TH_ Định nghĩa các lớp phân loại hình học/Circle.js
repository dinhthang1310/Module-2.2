var Circle = /** @class */ (function () {
    function Circle(color, filed, radius) {
        this.color = color;
        this.filed = filed;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * 2 * 3.14;
    };
    Circle.prototype.getPerimeter = function () {
        return this.radius * this.radius * 3.14;
    };
    return Circle;
}());
var circle = new Circle("black", false, 10);
console.log(circle.getArea());
console.log(circle.getPerimeter());
