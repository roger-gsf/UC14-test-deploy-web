function isPalindrome(str) {
    const strTreated = str.replace(/[^a-zA-Z]/g, "").trim().toLowerCase(); // .normalize('NFD') typeof stc !== string
    if (strTreated == strTreated.split("").reverse().join("")) return true;
    return false;
}

module.exports = { isPalindrome };
