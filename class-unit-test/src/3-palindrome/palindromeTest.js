function isPalindrome(str) {
    strTreated = str.replace(/[^a-zA-Z0-9]/g, "").trim().toLowerCase();
    if (strTreated == strTreated.split("").reverse().join("")) return true
    return false;
}

console.log(isPalindrome("Subi no onibus"));
