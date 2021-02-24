const Dot = require('./Dot')

class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    area = () => Math.PI * Math.pow(this.radius, 2);

    calculateDistanceBetweenPoints = (x1, y1, x2, y2) => {
        return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
    }

    containsDot = (dot)=> {
        let range = Math.pow(dot.x-this.center.x, 2) + Math.pow(dot.y-this.center.y, 2);
        return range < Math.pow(this.radius, 2) ;
    }
}
let dotA = new Dot(0, 0);
let dotB = new Dot(50, 50);
let circle = new Circle(dotA, 20);

console.log(circle.containsDot(dotB));