

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
}

//ABC
if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters, lowercase letters and numbers");
}

//AB
if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters and lowercase letters");
}

//A
if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters");
}

//ABD
if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters, lowercase letters and special characters");
}

//ACD
if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters, numbers and special characters");
}

//AC
if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters and numbers");
}

//AD
if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters and special characters");
}

//BCD
if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain lowercase letters, numbers and special characters");
}

//BC
if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain lowercase letters and numbers");
}

//BD
if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain lowercase letters and special characters");
}

//B
if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain lowercase letters");
}

//CD
if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain numbers and special characters");
}

//C
if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain numbers");
}

//D
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
