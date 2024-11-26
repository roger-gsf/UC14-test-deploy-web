const { multiply } = require('./math')

test('multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
})

test('multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
})
