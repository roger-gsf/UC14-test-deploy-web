const { isPalindrome } = require('../3-palindrome/palindrome.js');

test('Assert that the phrase is a palindrome.', () => {
    expect(isPalindrome('subinoonibus')).toBe(false);
    expect(isPalindrome('SubiNoOnibus')).toBe(false);
    expect(isPalindrome('Subi no onibus')).toBe(false);
    expect(isPalindrome('Subi no ônibus')).toBe(false);
    expect(isPalindrome('@Subi no ônibus')).toBe(false);
    expect(isPalindrome('1Subi no ônibus')).toBe(false);
    expect(isPalindrome(1)).toBe(false);
    expect(isPalindrome('')).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
});
