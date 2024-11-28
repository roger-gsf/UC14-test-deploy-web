function isPalindrome(str) {
    const strTreated = str.replace(/[^a-zA-Z0-9]/g, "").trim().toLowerCase();
    if (strTreated == strTreated.split("").reverse().join("")) return true;
    return false;
}

module.exports = { isPalindrome };
