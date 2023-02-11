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
var newInput = document.createElement("input");
var textInBox = document.querySelector("#password")
function firstClick() {
  newInput
  document.body.appendChild(newInput);
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "Enter Value here!");
  textInBox.setAttribute("placeholder", "Desired # of Characters (8-126)");
  return;
}
generateBtn.addEventListener("click", firstClick);
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
