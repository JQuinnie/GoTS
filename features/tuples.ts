// Array like structure where each element represents some property of a record

// Usually inside of a tuple, its a mix and match of different types of data

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

type Drink = [string, boolean, number]; // create idea of a tuple
// tuples have consistent ordering of elements
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40; // error

// use the Drink type alias
const sprit: Drink = ['clear', true, 40];
const tea: Drink = ['green', false, 0];

// Tuples are not used very often, see tuple vs object
// hard to represent meaningful data vs object
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
}
