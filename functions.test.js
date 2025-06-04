const { capitalize, reverseString, calculator, caesarCipher } = require('./functions');

test('capitalize first character of string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('returns string in reverse order', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('returns sum of two numbers', () => {
    expect(calculator.add(42, 23)).toBe(65);
});

test('returns result of subtracting second value from first value', () => {
    expect(calculator.subtract(42, 23)).toBe(19);
});

test('returns value of two numbers multiplied together', () => {
    expect(calculator.multiply(42, 23)).toBe(966);
});

test('returns value of first number divided by second number', () => {
    expect(calculator.divide(40, 20)).toBe(2);
});

test('returns string shifted by some factor - wrapping test', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('returns string shifted by some factor - case preservation test', () => {
    expect(caesarCipher('Hello', 3)).toBe('Khoor');
});

test('returns string shifted by some factor - punctuation test', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// test('returns sum of two numbers', () => {
//     expect(analyzeArray([]).average).toBe(65);
// });