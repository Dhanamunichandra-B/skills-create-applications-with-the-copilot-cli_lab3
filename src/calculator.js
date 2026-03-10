#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * Basic Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * Advanced Operations:
 * - Modulo (%)
 * - Exponentiation (^, **)
 * - Square Root (√, sqrt)
 * 
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *   node calculator.js <number> sqrt   (for square root)
 *   
 * Examples:
 *   node calculator.js 10 + 5      # Output: 15
 *   node calculator.js 10 - 3      # Output: 7
 *   node calculator.js 4 × 6       # Output: 24
 *   node calculator.js 20 ÷ 4      # Output: 5
 *   node calculator.js 10 % 3      # Output: 1
 *   node calculator.js 2 ^ 8       # Output: 256
 *   node calculator.js 16 sqrt     # Output: 4
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

// Modulo operation - returns the remainder of a divided by b
const modulo = (a, b) => {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
};

// Exponentiation operation - returns base raised to the exponent
const power = (base, exponent) => {
  return Math.pow(base, exponent);
};

// Square root operation - returns the square root of n with error handling for negative numbers
const squareRoot = (n) => {
  if (n < 0) {
    throw new Error('Square root of negative numbers is not allowed');
  }
  return Math.sqrt(n);
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
  } else if (operator === '%') {
    return modulo(num1, num2);
  } else if (operator === '^' || operator === '**') {
    return power(num1, num2);
  } else if (operator === '√' || operator === 'sqrt') {
    return squareRoot(num1);
  } else {
    throw new Error(`Unknown operator '${operator}'`);
  }
};

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2 || args.length > 3) {
    console.error('Usage: calculator.js <number1> <operator> [number2]');
    console.error('Supported binary operators: +, -, ×, ÷, *, /, %, ^, **');
    console.error('Supported unary operators: √, sqrt');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = args.length === 3 ? parseFloat(args[2]) : null;

  // Validate that num1 is a valid number
  if (isNaN(num1)) {
    console.error('Error: First argument must be a valid number');
    process.exit(1);
  }

  // For binary operators, validate num2
  if ((operator !== '√' && operator !== 'sqrt') && isNaN(num2)) {
    console.error('Error: Second argument must be a valid number for binary operators');
    process.exit(1);
  }

  try {
    let result;
    if (operator === '√' || operator === 'sqrt') {
      result = squareRoot(num1);
      console.log(`${operator}(${num1}) = ${result}`);
    } else {
      result = calculate(num1, operator, num2);
      console.log(`${num1} ${operator} ${num2} = ${result}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
