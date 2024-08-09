// First Function
function greet(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Third Function
function calculateFactorial(n) {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
}

// Fourth Function
function advancedFunction() {
    // Any advanced logic of your choice
}

// Exporting functions (CommonJS)
module.exports = {
    greet,
    convertCelsiusToFahrenheit,
    calculateFactorial,
    advancedFunction
};
