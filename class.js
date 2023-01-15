class Vehicle {
    constructor(wheels) {
    this.wheels = wheels;
    }
    toString() {
    return '(' + this.wheels + ')';
    }
    }
    class Car extends Vehicle {
    constructor(color) {
    super(4);
    this.color = color;
    }
    toString() {
    return super.toString() + ' colored: ' + this.color;
    }
    }
    let car = new Car('blue');
    car.toString();
    console.log(car instanceof Car);
    console.log(car instanceof Vehicle);
    