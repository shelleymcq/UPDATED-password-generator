const generateBtn = document.getElementById("generate");

// write password to #password textarea
function generatePassword() {
    



}

// generate random password
function createPassword() {




    // call generatePassword()
}


// get user input for character choices
function getInput() {

    let choices = {};

    let passwordLength = parseInt(prompt("Enter a password length. Password must be between 8 - 100 characters."));
        if (passwordLength) {
           choices.passwordLength = passwordLength;
        } 
        if(Number.isNaN(passwordLength)){
            alert("that is not a number");
            return;
          }
          if (passwordLength < 8 ) {
            alert("you must have a minimum length of 8");
            return;
          }
          if (passwordLength > 100 ){
            alert("you can have a maximum length of 100");
            return;
          }

    let lowerCase = confirm("Would you like to include lowercase letters? Ex: a, b, c, ...");
        if (lowerCase) {
            choices.lowerCase = true;
        } else {
            choices.lowerCase = false;
        }
    let upperCase = confirm("Would you like to include uppercase letters? Ex: A, B, C, ...");
        if (upperCase) {
            choices.upperCase = true;
        } else {
            choices.upperCase = false;
        }
    let numbers = confirm("Would you like to include numbers? Ex: 1, 2, 3, ...");
        if (numbers) {
            choices.numbers = true;
        } else {
            choices.numbers = false;
        }
    let symbols = confirm("Would you like to include symbols? Ex: #, $, *, ...");
        if (symbols) {
            choices.symbols = true;
        } else {
            choices.symbols = false;
        }

    if (
        lowerCase === false && 
        upperCase === false &&
        numbers === false &&
        symbols === false
    ) {
        alert("You must choose at least one type of character to include in password.");
        return;
    }

    console.log(choices);
    return choices;

    // call createPassword(choices);
}


// add event listener to generate button
generateBtn.addEventListener("click", getInput);

