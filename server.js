// Importing functions (CommonJS)
const { greet, convertCelsiusToFahrenheit, calculateFactorial, advancedFunction } = require('./utils');

// Using the functions
greet('Jessica', 'Jhenny');
console.log(`30°C is ${convertCelsiusToFahrenheit(30)}°F`);
console.log(`Factorial of 5 is ${calculateFactorial(5)}`);
advancedFunction();
