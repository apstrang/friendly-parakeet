//ARRAYS

//Uppercase letters

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Lowercase letters

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Numbers

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


//Special characters

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "'", ";", ":", "-", "_", "+", "=", "/"];

// Assignment code here

function generatePassword() {

  //password length
  var passwordLength = window.prompt("What is your desired password length? Please enter a numeric integer value between 8 and 128.");

    if (passwordLength >= 8 && passwordLength <= 128) {
      console.log(passwordLength);
    } else {
        return window.alert ("Please make a valid selection!");
    }

  //condition A - uppercase
  var passwordUppercase = window.prompt("Would you like to include uppercase letters? Please enter Y or N.");

    if (passwordUppercase === "Y" || passwordUppercase === "y") {
      passwordUppercase = true;
      console.log(passwordUppercase);
    } else if (passwordUppercase === "N" || passwordUppercase === "n") {
      passwordUppercase = false;
      console.log(passwordUppercase);
    } else {
        return window.alert ("Please make a valid selection!");
    }
  
  //condition B - lowercase
  var passwordLowercase = window.prompt("Would you like to include lowercase letters? Please enter Y or N.");

    if (passwordLowercase === "Y" || passwordLowercase === "y") {
      passwordLowercase = true;
      console.log(passwordLowercase);
    } else if (passwordLowercase === "N" || passwordLowercase === "n") {
      passwordLowercase = false;
      console.log(passwordLowercase);
    } else {
        return window.alert ("Please make a valid selection!");
    }
  
  //condition C - numbers
  var passwordNumbers = window.prompt("Would you like to include numbers? Please enter Y or N.");

    if (passwordNumbers === "Y" || passwordNumbers === "y") {
      passwordNumbers = true;
      console.log(passwordNumbers);
    } else if (passwordNumbers === "N" || passwordNumbers === "n") {
      passwordNumbers = false;
      console.log (passwordNumbers);
    } else {
        return window.alert ("Please make a valid selection!");
    }

  //condition D - special characters
  var passwordSpecial = window.prompt("Would you like to include special characters? Please enter Y or N.");

    if (passwordSpecial === "Y" || passwordSpecial === "y") {
      passwordSpecial = true;
      console.log(passwordSpecial);
    } else if (passwordSpecial === "N" || passwordSpecial === "n") {
      passwordSpecial = false;
      console.log (passwordSpecial);
    } else {
        return window.alert ("Please make a valid selection!");
    }

//ABCD


if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters, lowercase letters, numbers and special characters");
  var conditionABCD = [uppercase, lowercase, numbers, special]; {
  

  }

  
}



//ABC
var conditionABC = [uppercase, lowercase, numbers];

if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters, lowercase letters and numbers");
}



//AB
var conditionAB = [uppercase, lowercase];

if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters and lowercase letters");
}



//A
var conditionA = uppercase; 

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters");
}



//ABD
var conditionABD = [uppercase, lowercase, special];

if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters, lowercase letters and special characters");
}



//ACD
var conditionACD = [uppercase, numbers, special];

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters, numbers and special characters");
}



//AC
var conditionAC = [uppercase, numbers];

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters and numbers");
}



//AD
var conditionAD = [uppercase, special];

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters and special characters");
}



//BCD
var conditionBCD = [lowercase, numbers, special];

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain lowercase letters, numbers and special characters");
}



//BC
var conditionBC = [lowercase, numbers];

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain lowercase letters and numbers");
}



//BD
var conditionBD = [lowercase, special];

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain lowercase letters and special characters");
}



//B
var conditionB = lowercase;

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain lowercase letters");
}



//CD
var conditionCD = [numbers, special];

if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain numbers and special characters");
}



//C
var conditionC = numbers;

if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain numbers");
}



//D
var conditionD = special; 

if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain special characters");
}





}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
