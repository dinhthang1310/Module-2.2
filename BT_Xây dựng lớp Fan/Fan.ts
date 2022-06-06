enum Speed {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3
}
class Fan {
    private _speed : Speed ;
    private _on : boolean ;
    private _radius : number ;
    private _color : string ;


    constructor(speed: Speed, on: boolean, radius: number, color: string) {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    get speed(): Speed {
        return this._speed;
    }

    set speed(value: Speed) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    toString() {
        let status:any[] = []
        if (this._on) {
            status.push(this.radius,this._color,this._speed);
            console.log(status);
            console.log('fan is on')
        }else {
            status.push(this._color,this._radius);
            console.log(status);
            console.log('fan is off')
        }
    }
}
let fan1 = new Fan(3,true,10,"yellow");
let fan2 = new Fan(2,false,5,"yellow");
fan1.toString()
fan2.toString()
