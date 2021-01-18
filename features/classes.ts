// blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'.

class Vehicle {
  // have to initialize via 1 of 2 ways below
  // color: string = 'red';
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

// a car is a type of vehicle
// will allow access to methods of Vehicle
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // refers to constructor method in parent
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  startDriving(): void {
    this.drive();
    this.honk(); // can use protected in child
  }
}

// use class to create an instance of a class
const vehicle = new Vehicle('orange');
// vehicle.honk(); // this is protected, can't use
console.log(vehicle.color);

const carr = new Car(4, 'white');
carr.startDriving();
