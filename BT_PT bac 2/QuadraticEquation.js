var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    Object.defineProperty(QuadraticEquation.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuadraticEquation.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    QuadraticEquation.prototype.getDiscriminant = function () {
        return (this._b * this._b) - (4 * (this._a * this._c));
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        return (-this._b + Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        return (-this._b - Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    };
    QuadraticEquation.prototype.getRoot3 = function () {
        return -(this._b / (2 * this._a));
    };
    QuadraticEquation.prototype.getDelta = function () {
        var delta = this.getDiscriminant();
        if (delta > 0) {
            console.log("phuong trinh co 2 nghiem phan biet : ".concat(this.getRoot1(), " va ").concat(this.getRoot2()));
        }
        else if (delta == 0) {
            console.log("phuong trinh co nghiem kep : ".concat(this.getRoot3()));
        }
        else {
            console.log('The equation has no roots');
        }
    };
    return QuadraticEquation;
}());
var quadra = new QuadraticEquation(2, 9, 4);
quadra.getDelta();
