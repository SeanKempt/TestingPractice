import {
  capitalizeFirst,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from '../app.js';

test('if first letter is capitalized', () => {
  const value = 'Test';
  expect(capitalizeFirst(value[0])).toBe(value[0].toUpperCase());
});

test('if string gets reversed', () => {
  const string = 'HelloWorld';
  expect(reverseString(string)).toBe([...string].reverse().join(''));
});

describe('calculator is operational', () => {
  test('addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('subtraction', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  test('multiplication', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test('division', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});

describe('caesar Cipher is operational', () => {
  test('shift is working', () => {
    const string = 'test';
    const shift = 1;
    expect(caesarCipher(string, shift)).toBe('uftu');
  });
});

describe('Analyze Array Function operational', () => {
  const testArray = analyzeArray([1, 2, 3, 4, 5]);
  test('returns an object', () => {
    const obj = typeof testArray;
    expect(typeof testArray).toEqual(obj);
  });
  test('average', () => {
    expect(testArray.average()).toBe(3);
  });

  test('return the minimum value', () => {
    expect(testArray.min()).toBe(1);
  });

  test('return the maximum value', () => {
    expect(testArray.max()).toBe(5);
  });

  test('return the length of the numbers', () => {
    expect(testArray.howLong()).toBe(5);
  });
});
