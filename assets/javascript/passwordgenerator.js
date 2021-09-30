// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;
var upperCasePrompt;
var lowerCasePrompt;
var numberPrompt;
var specialcharacterPrompt;
var finalPass;
var charset;
var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz"
var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberSet = "0123456789"
var specialSet = "!@#$%^&*()-=_+/><,.?"

// Write password to the #password input
function writePassword() {
    //set the character set to be empty if someone wants to generate a different password with different variables.
    charset = "";
    //Checks password length and checks if its between 8-128 characters long.
    passwordLength = window.prompt("how long would you like the password to be?");
    if ((passwordLength > 128 || passwordLength < 8)) {
        window.alert("Error. Please select a value between 8 and 128");
        writePassword();
    } else {
        upperCasePrompt = window.confirm("Would you like your password to have upper case letters?");
        lowerCasePrompt = window.confirm("Would you like your password to have lower case letters?");
        numberPrompt = window.confirm("Would you like your password to have numbers?");
        specialcharacterPrompt = window.confirm("Would you like your password to have spacial characters?");
        console.log(passwordLength)

        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

        console.log(upperCasePrompt, lowerCasePrompt, numberPrompt, specialcharacterPrompt)
    }
}

function generatePassword() {
    if (lowerCasePrompt === true) {
        charset = charset + lowerCaseSet
    }
    if (upperCasePrompt === true) {
        charset = charset + upperCaseSet
    }
    if (numberPrompt === true) {
        charset = charset + numberSet
    }
    if (specialcharacterPrompt === true) {
        charset = charset + specialSet
    }
    var finalPass = "";
    for (var i = 0; i < passwordLength; i++) {
        finalPass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return finalPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
