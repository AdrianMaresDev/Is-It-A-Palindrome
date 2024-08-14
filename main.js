const input = document.getElementById("input")
const answer = document.getElementById("check-text")


//This function makes sure that the user input is always converted to lower case before it is checked.
//The user can check any word regardless of capitalization.
function isPalindrome(str) {
    const clean = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
    return clean === clean.split('').reverse().join('');
}

//This function takes in the user input and runs the isPalindrome function.
function checkPalindrome() {
    const value = input.value.trim();

    if (value === "") {
        answer.innerText = "Please enter a word."
        return
    }

    const reversed = isPalindrome(value);

    if (reversed) {
        answer.innerHTML = "This is a Palindrome! &#11088;";
    } else {
        answer.innerText = "This is not a Palindrome. Try again?"
    }
}

//Event listener for the button.
document.querySelector("#check-button").addEventListener("click", checkPalindrome);

//Event listener for the enter key.
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPalindrome();
    }
});