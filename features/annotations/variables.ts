// Type Annotation - Developer tells Typescript the type
// Type Inference - Typescript guesses the type

// Type Annotation below, but in actuality, Typescript uses type inference for these and doesn't need the simple type annotation

let apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date  = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truthy: boolean[] = [true, false, true];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use Annotations
// 1. Function that returns the 'any' type (Typescript doesn't know what type it is, hence 'any')
const json = '{"x": 10, "y":20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2. When variable is declared on one line and initialzed later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // better code would be -> let foundWord = false; to initialize

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}


// 3. When variable has a type that can't be inferred correctly
let numberList = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numberList.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
