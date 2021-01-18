interface Vehicle {
  name: string;
  year: number;
  isBroken: boolean;
}

interface Reportable {
  summary(): string; // function that will return a string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  isBroken: true,
  summary(): string {
    return `This is ${this.name} and it is a ${this.year} ${this.isBroken ? 'broken' : 'working'} vehicle.`;
  }
};

const printVehicle = (vehicle: { name: string; year: number; isBroken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.isBroken}`);
};

printVehicle(oldCivic);

// using interface
const anotherVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.isBroken}`);
};

anotherVehicle(oldCivic);

const soda = {
  brand: 'coke',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My ${this.brand} has ${this.sugar} grams of sugar.`
  }
}

// encouraged to write somewhat generic functions
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(soda);
