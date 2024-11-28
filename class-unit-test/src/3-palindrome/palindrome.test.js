const { isPalindrome } = require('../3-palindrome/palindrome.js');

test('Assert that the phrase is a palindrome.', () => {
    expect(isPalindrome('@#Subi no ônibus')).toBe(true);
});
