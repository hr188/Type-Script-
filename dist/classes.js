"use strict";
class player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getmyHeight = () => this.height;
        this.id = String(Math.floor(Math.random() * 100));
    }
}
const hrr = new player(6, 75, 55);
class player1 extends player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
        this.getmypower = () => this.power;
        this.special = special;
    }
}
const hrrr = new player1(100, 20, 40, true);
console.log("height", hrrr.getmyHeight());
console.log("weight", hrrr.weight);
console.log("power", hrrr.getmypower());
console.log("id", hrrr.id);
class Productt {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
    }
    get getid() {
        return `Product ID ${this.id}`;
    }
}
const p1 = new Productt('hr', 100, 100);
console.log(p1.getid);
