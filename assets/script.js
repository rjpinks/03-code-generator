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
    var numberDesired = newInput
    console.log(numberDesired)
    var newerInput = prompt("Press 1:lowercase 2:uppercase 3: numbers 4:special characters. Use 1+2+3 pattern to use more than one!");
    console.log(newerInput)
   } else {
    var newInput = prompt("Please only 8-126")
    var numberDesired = newInput
    console.log(numberDesired)
   }
   return;
}
generateBtn.addEventListener("click", firstPrompt);
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
