const input = document.getElementById("input")


//This function makes sure that the user input is always converted to lower case before it is checked.
//The user can check any word regardless of capitalization.
function isPalindrome(str) {
    const clean = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
    return clean === clean.split('').reverse().join('');
}

function checkPalindrome() {
    const value = input.value;
    const reversed = isPalindrome(value);
}