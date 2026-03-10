const { add, subtract, multiply, divide, calculate } = require('../calculator');

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
      expect(() => calculate(10, '%', 3)).toThrow('Unknown operator');
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
});
