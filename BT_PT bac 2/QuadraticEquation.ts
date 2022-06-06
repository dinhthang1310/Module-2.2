class QuadraticEquation {
    private _a: number;
    private _b: number;
    private _c: number;

    constructor(a: number, b: number, c: number) {
        this._a = a;
        this._b = b;
        this._c = c;
    }


    get a(): number {
        return this._a;
    }

    set a(value: number) {
        this._a = value;
    }

    get b(): number {
        return this._b;
    }

    set b(value: number) {
        this._b = value;
    }

    getDiscriminant() {
        return (this._b * this._b) - (4 * (this._a * this._c))
    }

    getRoot1() {
        return (-this._b + Math.sqrt(this.getDiscriminant())) / (2 * this._a)
    }

    getRoot2() {
        return (-this._b - Math.sqrt(this.getDiscriminant())) / (2 * this._a)
    }

    getRoot3() {
        return -(this._b / (2 * this._a))
    }

    getDelta() {
        let delta = this.getDiscriminant();
        if (delta > 0) {
            console.log(`phuong trinh co 2 nghiem phan biet : ${this.getRoot1()} va ${this.getRoot2()}`)
        } else if (delta == 0) {
            console.log(`phuong trinh co nghiem kep : ${this.getRoot3()}`)
        } else {
            console.log('The equation has no roots')
        }
    }
}

let quadra = new QuadraticEquation(2, 9, 4)
quadra.getDelta()