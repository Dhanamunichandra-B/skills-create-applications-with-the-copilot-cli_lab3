#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *   
 * Examples:
 *   node calculator.js 10 + 5      # Output: 15
 *   node calculator.js 10 - 3      # Output: 7
 *   node calculator.js 4 × 6       # Output: 24
 *   node calculator.js 20 ÷ 4      # Output: 5
 */

// Addition operation
const add = (a, b) => a + b;

// Subtraction operation
const subtract = (a, b) => a - b;

// Multiplication operation
const multiply = (a, b) => a * b;

// Division operation
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

const calculate = (num1, operator, num2) => {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '×' || operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '÷' || operator === '/') {
    return divide(num1, num2);
  } else {
    throw new Error(`Unknown operator '${operator}'`);
  }
};

// Export functions for testing
module.exports = { add, subtract, multiply, divide, calculate };

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: calculator.js <number1> <operator> <number2>');
    console.error('Supported operators: +, -, ×, ÷, *, /');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  // Validate that both arguments are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
