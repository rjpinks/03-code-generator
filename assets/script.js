//PSEUDOCODE:
//We need that media event click on the generate button.
//When that happens a prompt appears.
//User interacts with prompt and the info is saved in variables
  //First length then characters used
//Once all prompts have been selected, the variables are used to generate a password
//The password is then presented on the screen.


// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var newElement = document.createElement("section");
var numberDesired = 0
var charactersDesired = ""

//Right now you just need to figure out how to save the data globally from the alerts
function firstPrompt() {
   var newInput = prompt("Enter Desired # of Characters (8-126)");
   if (newInput >= 8 && newInput <= 126) {
    globalThis.numberDesired = newInput
    var newerInput = prompt("Press 1:lowercase 2:uppercase 3: numbers 4:special characters. (E.g. '2+4' will chose uppercase and special characters)");
    console.log(newerInput)
    if (newerInput === 1) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === 2) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === 3) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === 4) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "1+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "1+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "1+4") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+1") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+4") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+1") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+4") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+1") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+4") {
      globalThis.charactersDesired = newerInput
    } else {
      var newerInput = prompt("Please try again")
      globalThis.charactersDesired = newerInput
    }
   } else {
    var newInput = prompt("Please only 8-126")
    globalThis.numberDesired = newInput
    console.log(numberDesired)
    var newerInput = prompt("Press 1:lowercase 2:uppercase 3: numbers 4:special characters. (E.g. '2+4' will chose uppercase and special characters)");
    console.log(newerInput)
    if (newerInput === 1) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === 2) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === 3) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === 4) {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "1+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "1+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "1+4") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+1") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "2+4") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+1") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "3+4") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+1") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+2") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+3") {
      globalThis.charactersDesired = newerInput
    } else if (newerInput === "4+4") {
      globalThis.charactersDesired = newerInput
    } else {
      var newerInput = prompt("Please try again")
      globalThis.charactersDesired = newerInput
    }
   }
   return;
}

generateBtn.addEventListener("click", firstPrompt);
console.log(numberDesired)
console.log(charactersDesired)
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
