//PSEUDOCODE/GENERAL IDEA
  //create the variables for the string that'll be used to create the password
  //clicking on  the generate button will launch the function firstPrompt()
    //firstPrompt() will ask for desired length in a prompt. It'll save the user input in returnValue as a numeric.
    //it'll ask for desired characters--depending on the input it'll add the vars containing characters to passList. It should also save newerInput.
    //next it'll launch the function that generates the password by using a random number(randoMaker)

//These are the most important variables for the code generator
var generateBtn = document.querySelector("#generate");
var newElement = document.createElement("section");
var littleLetters = "abcdefghijklmnopqrstuvwxyz";
var passNumbers = "0123456789";
var specialCharacters = "!@#$%^&*";
var bigLetters = littleLetters.toUpperCase();
var passList = "";
var finalProduct = "";

//This is a function that generates the random integer later and is very important

function randomInt(ceiling) {
  var randoMaker = Math.floor(Math.random() * ceiling);
  finalProduct = finalProduct + passList[randoMaker];
  return finalProduct;
}

//This will be the prompt function and the meet of getting the password to generate


function firstPrompt() {
  var newInput = prompt("Enter Desired # of Characters (8-126)");
  if (newInput >= 8 && newInput <= 126) {
    var returnValue = Number(newInput);
    var newerInput = prompt("Press 1:lowercase 2:uppercase 3: numbers 4:special characters. (E.g. '2+4' will chose uppercase and special characters lowest # to highest # only)");
    if (newerInput === "1") {
      passList = passList + littleLetters;
    } else if (newerInput === '2') {
      passList = passList + bigLetters;
    } else if (newerInput === '3') {
      passList = passList + passNumbers;
    } else if (newerInput === '4') {
      passList = passList + specialCharacters;
    } else if (newerInput === "1+2") {
      passList = passList + littleLetters + bigLetters;
    } else if (newerInput === "1+3") {
      passList = passList + littleLetters + passNumbers;
    } else if (newerInput === "1+4") {
      passList = passList + littleLetters + specialCharacters;
    } else if (newerInput === "2+1") {
      passList = passList + bigLetters + littleLetters;
    } else if (newerInput === "2+3") {
      passList = passList + bigLetters + passNumbers;
    } else if (newerInput === "2+4") {
      passList = passList + bigLetters + specialCharacters;
    } else if (newerInput === "3+4") {
      passList = passList + passNumbers + specialCharacters;
    } else if (newerInput === "1+2+3") {
      passList = passList + littleLetters + bigLetters + passNumbers;
    } else if (newerInput === "1+3+4") {
      passList = passList + littleLetters + passNumbers + specialCharacters;
    } else if (newerInput === "2+3+4") {
      passList = passList + bigLetters + passNumbers + specialCharacters;
    } else if (newerInput === "1+2+3+4") {
      passList = passList + littleLetters + bigLetters + passNumbers + specialCharacters;
    } else {
      globalThis.newerInput = prompt("Refresh and try again");
    }
  } else {
    globalThis.newInput = prompt("Refresh and only use 8-126 Please");
  }
  if (returnValue != 0) {
    function yourPassword() {
      returnValue = Number(returnValue);
      var lengthOfString = passList.length();
      for (let i = 0; i < returnValue; i++) {
        randomInt(returnValue)
      }
    yourPassword();
    }
  }
  console.log(finalProduct);
  return finalProduct;
}

generateBtn.addEventListener("click", firstPrompt);


//Write password to the #password input


    // function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
