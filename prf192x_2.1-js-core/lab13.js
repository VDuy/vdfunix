`use strict`;

// OOP
// lab 13.1 create object\


const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log('13.1');
car1.accelerate();
car2.accelerate();

car1.brake();
car2.brake();


// lab 13.2 using ES6

console.log('13.2');

class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const car11 = new CarCL('BMW', 120);
const car21 = new CarCL('Mercedes', 95);

console.log(car11.speedUS);
console.log(car21.speedUS);
car11.accelerate();
car11.brake();
car11.speedUS = 50;
console.log(car11)

// lab 13.3 
console.log('13.3');
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// link the protototypes
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};


const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.brake();


// lab 13.4 
console.log('13.4');
  class EVCl extends CarCL {
    #charge;
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      return this;
    }
  
    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${
          this.#charge
        }`
      );
      return this;
    }
  }
  
  const rivian = new EVCl('Rivian', 120, 23);
  console.log(rivian);

  rivian
    .accelerate()
    .brake()
    .chargeBattery(90)
    .accelerate();
  
  console.log(rivian.speedUS);