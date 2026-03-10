const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  // ===== ADDITION TESTS =====
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 1.5)).toBe(4);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ===== SUBTRACTION TESTS =====
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract positive from negative', () => {
      expect(subtract(-10, 5)).toBe(-15);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });

    test('should result in negative number', () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  // ===== MULTIPLICATION TESTS =====
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -6)).toBe(24);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 500)).toBe(500000);
    });
  });

  // ===== DIVISION TESTS =====
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -4)).toBe(-5);
    });

    test('should divide negative by positive', () => {
      expect(divide(-20, 4)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should divide by one', () => {
      expect(divide(10, 1)).toBe(10);
    });

    test('should return fraction result', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333333, 5);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for negative zero division', () => {
      expect(() => divide(20, -0)).toThrow('Division by zero is not allowed');
    });
  });

  // ===== INTEGRATION TESTS (calculate function) =====
  describe('Calculate Function (Integration)', () => {
    // From the image: 2 + 3, 10 - 4, 45 * 2, 20 / 5
    test('should calculate addition with + operator', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction with - operator', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication with * operator', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate multiplication with × operator', () => {
      expect(calculate(45, '×', 2)).toBe(90);
    });

    test('should calculate division with / operator', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should calculate division with ÷ operator', () => {
      expect(calculate(20, '÷', 5)).toBe(4);
    });

    test('should throw error for unknown operator', () => {
      expect(() => calculate(10, '&', 3)).toThrow('Unknown operator');
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle complex calculations', () => {
      expect(calculate(100, '+', 50)).toBe(150);
      expect(calculate(100, '-', 30)).toBe(70);
      expect(calculate(25, '*', 4)).toBe(100);
      expect(calculate(100, '/', 4)).toBe(25);
    });

    test('should handle decimal inputs', () => {
      expect(calculate(5.5, '+', 2.5)).toBe(8);
      expect(calculate(10.5, '-', 3.2)).toBeCloseTo(7.3);
      expect(calculate(3.5, '*', 2)).toBe(7);
      expect(calculate(7.5, '/', 2.5)).toBe(3);
    });

    test('should handle negative numbers', () => {
      expect(calculate(-5, '+', 10)).toBe(5);
      expect(calculate(-10, '-', -5)).toBe(-5);
      expect(calculate(-4, '*', -5)).toBe(20);
      expect(calculate(-20, '/', -4)).toBe(5);
    });
  });

  // ===== MODULO TESTS =====
  describe('Modulo (modulo)', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger dividend', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo when dividend is smaller', () => {
      expect(modulo(3, 5)).toBe(3);
    });

    test('should calculate modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
      expect(modulo(10, -3)).toBe(1);
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with one', () => {
      expect(modulo(7, 1)).toBe(0);
    });

    test('should calculate modulo when divisible evenly', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should handle decimal modulo', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });
  });

  // ===== EXPONENTIATION TESTS =====
  describe('Exponentiation (power)', () => {
    test('should calculate power with positive exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with exponent of 2 (square)', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate power with exponent of 0', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with exponent of 1', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBeCloseTo(0.25);
    });

    test('should calculate large powers', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate power of zero', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });
  });

  // ===== SQUARE ROOT TESTS =====
  describe('Square Root (squareRoot)', () => {
    test('should calculate square root of perfect squares', () => {
      expect(squareRoot(16)).toBe(4);
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(9)).toBe(3);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414213, 5);
      expect(squareRoot(10)).toBeCloseTo(3.162277, 5);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should throw error for square root of negative numbers', () => {
      expect(() => squareRoot(-9)).toThrow('Square root of negative numbers is not allowed');
      expect(() => squareRoot(-1)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should calculate square root of large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });
  });

  // ===== ADVANCED OPERATIONS INTEGRATION TESTS =====
  describe('Advanced Operations Integration', () => {
    // From the image: 5 % 2, 2 ^ 3, √16
    test('should calculate modulo with % operator', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should calculate power with ^ operator', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('should calculate power with ** operator', () => {
      expect(calculate(3, '**', 2)).toBe(9);
    });

    test('should calculate square root with sqrt operator', () => {
      expect(calculate(16, 'sqrt')).toBe(4);
    });

    test('should calculate square root with √ operator', () => {
      expect(calculate(25, '√')).toBe(5);
    });

    test('should throw error for modulo by zero via calculate', () => {
      expect(() => calculate(10, '%', 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error for negative square root via calculate', () => {
      expect(() => calculate(-16, 'sqrt')).toThrow('Square root of negative numbers is not allowed');
    });

    test('should handle complex advanced calculations', () => {
      expect(calculate(17, '%', 5)).toBe(2);
      expect(calculate(3, '^', 4)).toBe(81);
      expect(calculate(100, 'sqrt')).toBe(10);
    });

    test('should handle decimal inputs with advanced operations', () => {
      expect(calculate(2, '**', 0.5)).toBe(Math.sqrt(2));
      expect(calculate(6.25, 'sqrt')).toBe(2.5);
    });

    test('should handle negative inputs with modulo', () => {
      expect(calculate(-10, '%', 3)).toBe(-1);
    });

    test('should handle negative base with power', () => {
      expect(calculate(-2, '^', 4)).toBe(16);
    });
  });
});
