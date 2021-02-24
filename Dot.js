class Dot {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    toString = () => `[${this._x}, ${this._y}]`;
}

let dotA = new Dot(10, 25);
console.log(dotA.toString())

module.exports = Dot