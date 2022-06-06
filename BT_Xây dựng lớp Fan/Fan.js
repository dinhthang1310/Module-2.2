var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        var status = [];
        if (this._on) {
            status.push(this.radius, this._color, this._speed);
            console.log(status);
            console.log('fan is on');
        }
        else {
            status.push(this._color, this._radius);
            console.log(status);
            console.log('fan is off');
        }
    };
    return Fan;
}());
var fan1 = new Fan(3, true, 10, "yellow");
var fan2 = new Fan(2, false, 5, "yellow");
fan1.toString();
fan2.toString();
