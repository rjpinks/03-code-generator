//PSEUDOCODE:
//We need that media event click on the generate button.
//When that happens a prompt appears.
//User interacts with prompt and the info is saved in variables
  //First length then characters used
//Once all prompts have been selected, the variables are used to generate a password
//The password is then presented on the screen.


// Assignment code here

// Get references to the #generate element

//Variables
var generateBtn = document.querySelector("#generate");
var newElement = document.createElement("section");
var bigLetters = ["A", "B", "C", "D", "E", 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var littleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
var passNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passList = [];
var charactersDesired = "";
var numberDesired = 0;
var newInput = 0;
var newerInput = "";
var finalProduct = "";
var passwordObject = [];

//function that will make the string that will be called later
function randomInt(ceiling) {
  var randoMaker = Math.floor(Math.random() * ceiling);
  finalProduct = finalProduct + passwordObject[randoMaker];
  globalThis.finalProduct = finalProduct;
}

//function with a long if statement that will collect user data from an alert
function firstPrompt() {
   var newInput = prompt("Enter Desired # of Characters (8-126)");
   if (newInput >= 8 && newInput <= 126) {
    globalThis.numberDesired = newInput
    var newerInput = prompt("Press 1:lowercase 2:uppercase 3: numbers 4:special characters. (E.g. '2+4' will chose uppercase and special characters lowest # to highest # only)");
    console.log(newerInput);
    if (newerInput === "1") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters);
    } else if (newerInput === '2') {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters);
    } else if (newerInput === '3') {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(passNumbers);
    } else if (newerInput === '4') {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(specialCharacters);
    } else if (newerInput === "1+2") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, bigLetters);
    } else if (newerInput === "1+3") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, passNumbers);
    } else if (newerInput === "1+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, specialCharacters);
    } else if (newerInput === "2+1") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, littleLetters);
    } else if (newerInput === "2+3") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, passNumbers);
    } else if (newerInput === "2+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, specialCharacters);
    } else if (newerInput === "3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(passNumbers, specialCharacters);
    } else if (newerInput === "1+2+3") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, bigLetters, passNumbers);
    } else if (newerInput === "1+3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, passNumbers, specialCharacters);
    } else if (newerInput === "2+3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, passNumbers, specialCharacters);
    } else if (newerInput === "1+2+3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, bigLetters, passNumbers, specialCharacters);
    } else {
      globalThis.newerInput = prompt("Refresh and try again");
      globalThis.charactersDesired = newerInput;
    }
   } else {
    globalThis.newInput = prompt("Please only 8-126");
    globalThis.numberDesired = newInput;
    console.log(numberDesired);
    globalThis.newerInput = prompt("Press 1:lowercase 2:uppercase 3: numbers 4:special characters. (E.g. '2+4' will chose uppercase and special characters)");
    console.log(newerInput);
    if (newerInput === "1") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters);
    } else if (newerInput === '2') {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters);
    } else if (newerInput === '3') {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(passNumbers);
    } else if (newerInput === '4') {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(specialCharacters);
    } else if (newerInput === "1+2") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, bigLetters);
    } else if (newerInput === "1+3") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, passNumbers);
    } else if (newerInput === "1+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, specialCharacters);
    } else if (newerInput === "2+1") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, littleLetters);
    } else if (newerInput === "2+3") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, passNumbers);
    } else if (newerInput === "2+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, specialCharacters);
    } else if (newerInput === "3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(passNumbers, specialCharacters);
    } else if (newerInput === "1+2+3") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, bigLetters, passNumbers);
    } else if (newerInput === "1+3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, passNumbers, specialCharacters);
    } else if (newerInput === "2+3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(bigLetters, passNumbers, specialCharacters);
    } else if (newerInput === "1+2+3+4") {
      globalThis.charactersDesired = newerInput;
      passList = passList.concat(littleLetters, bigLetters, passNumbers, specialCharacters);
    } else {
      var newerInput = prompt("Refresh and try again");
    }
   }
  if (numberDesired != 0 && charactersDesired != "") {
    yourPassword()
  }
}

function yourPassword() {
  //this if statment will create the appropriate array of characters
  // if (newerInput === '1') {
  //   passwordObject.concat(littleLetters);
  // } else if (newerInput === '2') {
  //   passwordObject.concat(bigLetters);
  // } else if (newerInput === '3') {
  //   passwordObject.concat(passNumbers);
  // } else if (newerInput === '4') {
  //   passwordObject.concat(specialCharacters);
  // } else if (newerInput === "1+2") {
  //   passwordObject.concat(littleLetters, bigLetters);
  // } else if (newerInput === "1+3") {
  //   passwordObject.concat(littleLetters, passNumbers);
  // } else if (newerInput === "1+4") {
  //   passwordObject.concat(littleLetters, specialCharacters);
  // } else if (newerInput === "2+3") {
  //   passwordObject.concat(bigLetters, passNumbers);
  // } else if (newerInput === "2+4") {
  //   passwordObject.concat(bigLetters, specialCharacters);
  // } else if (newerInput === "3+4") {
  //   passwordObject.concat(passNumbers, specialCharacters);
  // } else if (newerInput === "1+2+3") {
  //   passwordObject.concat(littleLetters, bigLetters, passNumbers);
  // } else if (newerInput === "1+2+4") {
  //   passwordObject.concat(littleLetters, bigLetters, specialCharacters);
  // } else if (newerInput === "1+3+4") {
  //   passwordObject.concat(littleLetters, passNumbers, specialCharacters);
  // } else if (newerInput === "2+3+4") {
  //   passwordObject.concat(bigLetters, passNumbers, specialCharacters);
  // } else if (newerInput === "2+3+4") {
  //   passwordObject.concat(bigLetters, passNumbers, specialCharacters);
  // } else {
  //   passwordObject.concat(littleLetters, bigLetters, passNumbers, specialCharacters);
  // }
  numberDesired = Number(numberDesired);
  //this for loop will select a character at random from the list and append it at the end of the string.
  var lengthOfString = passList.length()
  for (let index = 0; index < numberDesired; index++) {
    randomInt(lengthOfString);
    return;
  }
}

generateBtn.addEventListener("click", firstPrompt);


//Write password to the #password input

//PSEUDOCODE
  //1st get the object with all the lists i want to use in an if statement
  //2nd use the randomInt function to select a random position in the object.
  //3rd we will iterate just until the desired number in a for loop
    //each iteration will append a random character to a string creating the password



    // function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button

//generateBtn.addEventListener("click", writePassword);

// //so first i'm going to need an array of each of the characters. I will write this in the variabels
// //next i'm going to have to figure out some of those random methods