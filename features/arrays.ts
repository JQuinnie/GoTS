const anyArray: any[] = [true, 'string', 1];

const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [];
const carsByMake = [
  ['Prius'],
  ['Yaris'],
  ['Beetle'],
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // nope

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2020-01-01');
importantDates.push(new Date());
importantDates.push(100); // nope

