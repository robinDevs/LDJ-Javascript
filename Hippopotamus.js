class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name       = name;
        this.weight     = weight;
        this.tusksSize  = tusksSize;
    }

    swim = () => {
        this.weight -= 300;
    }

    eat = () => {
        this.weight += 1000;
    }

    fight = (hypo) => this.tusksSize > hypo.tusksSize ? this.name : hypo.name;

    toString = () => `Hyppo ${this.name} weights ${this.weight} and has tusks sized at ${this.tusksSize}`;
}

let hyppo1 = new Hippopotamus("Hyppo A", 5000, 300);
let hyppo2 = new Hippopotamus("Hyppo B", 3000, 400);

console.log("The winner is " + hyppo1.fight(hyppo2));

let hyppoThreeWeeks = () => {
    for (let i = 0; i < 21; i++) {
        hyppoFifteenHours(hyppo1);
        if (hyppo1.weight <= 0) {
            console.log('Oh wait !  Your hyppo is dead :(');
        } else {
            console.log(`Day : ${i+1} - ${hyppo1.toString()}`)
        }
    }
}

let hyppoFifteenHours = (hyppo) => {
    for (let i = 0 ; i < 15; i++) {
        hyppoCycle(hyppo);
    }
}

let hyppoCycle = (hyppo) => {
    hyppo.eat();
    hyppo.eat();
    hyppo.swim();
    hyppo.swim();
    hyppo.swim();
}
