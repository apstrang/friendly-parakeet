//ARRAYS

//Uppercase letters

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//Lowercase letters

var lowercase = "abcdefghijklmnopqrstuvwxyz";


//Numbers

var numbers = "0123456789";


//Special characters

var special = "!@#$%^&*()?;:-_+=/"; 
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
    var pass = '';
    var conditionABCD = uppercase + lowercase + numbers + special;
    console.log(conditionABCD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionABCD.length);
      pass += conditionABCD.charAt(char)
    }

    console.log(pass);

}



//ABC

if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters, lowercase letters and numbers");
    var pass = '';
    var conditionABC = uppercase + lowercase + numbers;
    console.log(conditionABC);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionABC.length);
      pass += conditionABC.charAt(char)
    }

    console.log(pass);

}



//AB

if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters and lowercase letters");
  var pass = '';
  var conditionAB = uppercase + lowercase;
  console.log(conditionAB);

  for (i = 1; i <= passwordLength; i++) {
    var char = Math.floor(Math.random() * conditionAB.length);
    pass += conditionAB.charAt(char)
  }

  console.log(pass);
}



//A
var conditionA = uppercase; 

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters");
  var pass = '';
    var conditionA = uppercase;
    console.log(conditionA);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionA.length);
      pass += conditionA.charAt(char)
    }

    console.log(pass);
}



//ABD

if (passwordUppercase === true && passwordLowercase === true && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters, lowercase letters and special characters");
  var pass = '';
    var conditionABD = uppercase + lowercase + special;
    console.log(conditionABD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionABD.length);
      pass += conditionABD.charAt(char)
    }

    console.log(pass);
}



//ACD

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters, numbers and special characters");
  var pass = '';
    var conditionACD = uppercase + numbers + special;
    console.log(conditionACD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionACD.length);
      pass += conditionACD.charAt(char)
    }

    console.log(pass);
}



//AC

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain uppercase letters and numbers");
  var pass = '';
    var conditionAC = uppercase + numbers;
    console.log(conditionAC);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionAC.length);
      pass += conditionAC.charAt(char)
    }

    console.log(pass);
}



//AD

if (passwordUppercase === true && passwordLowercase === false && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain uppercase letters and special characters");
  var pass = '';
    var conditionAD = uppercase + special;
    console.log(conditionAD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionAD.length);
      pass += conditionAD.charAt(char)
    }

    console.log(pass);
}



//BCD

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain lowercase letters, numbers and special characters");
  var pass = '';
    var conditionBCD = lowercase + numbers + special;
    console.log(conditionBCD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionBCD.length);
      pass += conditionBCD.charAt(char)
    }

    console.log(pass);
}



//BC

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain lowercase letters and numbers");
  var pass = '';
    var conditionBC = lowercase + numbers;
    console.log(conditionBC);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionBC.length);
      pass += conditionBC.charAt(char)
    }

    console.log(pass);
}



//BD

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain lowercase letters and special characters");
  var pass = '';
    var conditionBD = lowercase + special;
    console.log(conditionBD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionBD.length);
      pass += conditionBD.charAt(char)
    }

    console.log(pass);
}



//B

if (passwordUppercase === false && passwordLowercase === true && passwordNumbers === false && passwordSpecial === false) {
  console.log ("Password will contain lowercase letters");
  var pass = '';
    var conditionB = lowercase;
    console.log(conditionB);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionB.length);
      pass += conditionB.charAt(char)
    }

    console.log(pass);
}



//CD

if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === true && passwordSpecial === true) {
  console.log ("Password will contain numbers and special characters");
  var pass = '';
    var conditionCD = numbers + special;
    console.log(conditionCD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionCD.length);
      pass += conditionCD.charAt(char)
    }

    console.log(pass);
}



//C

if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === true && passwordSpecial === false) {
  console.log ("Password will contain numbers");
  var pass = '';
    var conditionC = numbers;
    console.log(conditionC);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionC.length);
      pass += conditionC.charAt(char)
    }

    console.log(pass);
}



//D

if (passwordUppercase === false && passwordLowercase === false && passwordNumbers === false && passwordSpecial === true) {
  console.log ("Password will contain special characters");
  var pass = '';
    var conditionD = special;
    console.log(conditionD);

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * conditionD.length);
      pass += conditionD.charAt(char)
    }

    console.log(pass);
}


return pass;


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
