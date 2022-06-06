class Circle {
    color:string;
    filed:boolean;
    radius:number

    constructor(color: string, filed: boolean,radius:number) {
        this.color = color;
        this.filed = filed;
        this.radius = radius;
    }
    getArea() {
        return this.radius * 2 * 3.14
    }
    getPerimeter() {
        return this.radius * this.radius * 3.14
    }

}
let circle = new Circle("black",false,10)
console.log(circle.getArea())
console.log(circle.getPerimeter())