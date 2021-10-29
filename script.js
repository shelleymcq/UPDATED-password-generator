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

    let lowerCase = confirm("Would you like to include lowercase letters? Ex: a, b, c, ...");
        if (lowerCase) {
            choices.lowerCase = "true";
        } 
    let upperCase = confirm("Would you like to include uppercase letters? Ex: A, B, C, ...");
        if (upperCase) {
            choices.upperCase = "true";
        } 
    let numbers = confirm("Would you like to include numbers? Ex: 1, 2, 3, ...");
        if (numbers) {
            choices.numbers = "true";
        } 
    let symbols = confirm("Would you like to include symbols? Ex: #, $, *, ...");
        if (symbols) {
            choices.symbols = "true";
        } 
    console.log(choices);
    return choices;

    // call createPassword(choices);
}


// add event listener to generate button
generateBtn.addEventListener("click", getInput);


// switch(favDrink) {
//     case "Martini":
//       text = "Excellent choice! Martini is good for your soul.";
//       break;
//     case "Daiquiri":
//       text = "Daiquiri is my favorite too!";
//       break;
//     case "Cosmopolitan":
//       text = "Really? Are you sure the Cosmopolitan is your favorite?";
//       break;
//     default:
//       text = "I have never heard of that one..";
//       break;