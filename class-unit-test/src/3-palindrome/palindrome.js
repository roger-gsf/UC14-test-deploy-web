
function isPalindrome(message) {
    if (!message.trim()) return false; 
    message.trim().split("").reverse().join("").toLowerCase();
    return true;
}

module.exports = { isPalindrome };
