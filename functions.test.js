const { capitalize, reverseString } = require('./functions');

test('capitalize first character of string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('returns string in reverse order', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});