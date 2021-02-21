// Assignment code here

function generatePassword() {

  var passwordLength = window.prompt("What is your desired password length? Please enter a value between 8 and 128.");

    if (passwordLength >= 8 && passwordLength <= 128) {
      console.log(passwordLength);
    }else {
        return window.alert ("Please make a valid selection!");
      }

  var passwordUppercase = window.prompt("Would you like to include uppercase letters? Please enter Y or N.");

    if (passwordUppercase === "Y" || passwordUppercase === "y") {
      console.log(passwordUppercase);
    } else if (passwordUppercase === "N" || passwordUppercase === "n"){
      console.log(passwordUppercase);
    } else {
        return window.alert ("Please make a valid selection!");
    }

  var passwordLowercase = window.prompt("Would you like to include lowercase letters? Please enter Y or N.");

    if (passwordLowercase === "Y" || passwordLowercase === "y") {
      console.log(passwordLowercase);
    } else if (passwordLowercase === "N" || passwordlowercase === "n"){
      console.log(passwordLowercase);
    } else {
        return window.alert ("Please make a valid selection!");
    }

  var passwordNumbers = window.prompt("Would you like to include numbers? Please enter Y or N.");

    if (passwordNumbers === "Y" || passwordNumbers === "y") {
      console.log(passwordNumbers);
    } else if (passwordNumbers === "N" || passwordNumbers === "n") {
      console.log(passwordNumbers);
    } else {
        return window.alert ("Please make a valid selection!");
    }

  var passwordSpecial = window.prompt("Would you like to include special characters? Please enter Y or N.");

    if (passwordSpecial === "Y" || paswordSpecial === "y") {
      console.log(passwordSpecial);
    } else if (passwordSpecial === "N" || passwordSpecial === "n") {
      console.log(passwordSpecial)
    } else {
        return window.alert ("Please make a valid selection!");
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
