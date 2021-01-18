interface Vehicle {
  name: string;
  year: number;
  isBroken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  isBroken: true,
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
