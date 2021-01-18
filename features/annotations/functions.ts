// No type inference for arguments, but type inference works out output, but we should always specify
const add = (a: number, b: number): number => {
  return a + b;
};

// Type inference works out output, but you should always specify
const substract = (a: number, b: number) => a - b;

function divide (a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

// Void
const logger = (message: string): void => {
  console.log(message);
}

// Never (never reach the end, exit function early)
const throwError = (message: string): never => {
  throw new Error(message);
}

// Destructuring Annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

/** ES2015 destructuring
 * const logWeather = ({ date, weather }) => {
 * console.log(date);
 * console.log(weather);
 * };
 *
 */

/** Typescript with destructuring
 * const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
 * console.log(date);
 * console.log(weather);
 *
 */

logWeather(todaysWeather);
