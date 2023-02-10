// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate and pass password to webpage
function generatePassword() {
  // Asking user input to determine characters in password
  var passwordLength = window.prompt("Enter the length of the password you would like");
  //checking password length is a number between 8 and 128
  while(isNaN(passwordLength) || passwordLength<8 || passwordLength>128) {
    if (isNaN(passwordLength)) {
        passwordLength = window.prompt("You did not enter a number, please enter the length of the password you would like");
    } else {
        passwordLength = window.prompt("The value you entered was not between 8 and 128, please enter the length of the password you would like");
    }
  }
  var specialCharDesicion = window.confirm("Would you like to include special characters?");
  var numberDesicion = window.confirm("Would you like to include numbers?");
  var lowercaseDesicion = window.confirm("Would you like to include lowercase letters?");
  var uppercaseDesicion = window.confirm("Would you like to include uppercase letters?");
  // Checking at least one character type is chosen
  while (!specialCharDesicion && !numberDesicion && !lowercaseDesicion && !uppercaseDesicion) {
    specialCharDesicion = window.confirm("Would you like to include special characters?");
    numberDesicion = window.confirm("Would you like to include numbers?");
    lowercaseDesicion = window.confirm("Would you like to include lowercase letters?");
    uppercaseDesicion = window.confirm("Would you like to include uppercase letters?");
  }
  // Using arrays and random numbers to generate a password through for loop
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = [0,1,2,3,4,5,6,7,8,9]
  var specialCharString =  " \!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //33 items, index from 0-32

    if (uppercaseDesicion && lowercaseDesicion && numberDesicion && specialCharDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(4);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
        } else if (arrayNum == 1) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
        } else if (arrayNum == 2) {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
        } else {
          var indexNum = getRandomInt(33);
          var character = specialCharString.charAt(indexNum);
          if (character === "\!") {
            var word = word + "\!";
          } else if (character === "\"") {
            var word = word + "\"";
          } else {
            var word = word + character;
          }
        }
      }
    } else if (uppercaseDesicion && lowercaseDesicion && numberDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(3);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
        } else if (arrayNum == 1) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
        } else {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
        }
      }
    } else if (uppercaseDesicion && lowercaseDesicion && specialCharDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(3);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
        } else if (arrayNum == 1) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
        } else {
          var indexNum = getRandomInt(33);
          var character = specialCharString.charAt(indexNum);
          if (character === "\!") {
            var word = word + "\!";
          } else if (character === "\"") {
            var word = word + "\"";
          } else {
            var word = word + character;
          }
        }
      }
    } else if (uppercaseDesicion && numberDesicion && specialCharDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(3);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
        } else if (arrayNum == 1) {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
        } else {
          var indexNum = getRandomInt(33);
          var character = specialCharString.charAt(indexNum);
          if (character === "\!") {
            var word = word + "\!";
          } else if (character === "\"") {
            var word = word + "\"";
          } else {
            var word = word + character;
          }
        }
      }
    } else if (lowercaseDesicion && numberDesicion && specialCharDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(3);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
        } else if (arrayNum == 1) {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
        } else {
          var indexNum = getRandomInt(33);
          var character = specialCharString.charAt(indexNum);
          if (character === "\!") {
            var word = word + "\!";
          } else if (character === "\"") {
            var word = word + "\"";
          } else {
            var word = word + character;
          }
        }
      }
    } else if (uppercaseDesicion && lowercaseDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(2);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
        } else {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
        }
      }
    } else if (uppercaseDesicion && numberDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(2);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
        } else {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
        }
      }
    } else if (uppercaseDesicion && specialCharDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(2);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
        } else {
          var indexNum = getRandomInt(33);
          var character = specialCharString.charAt(indexNum);
          if (character === "\!") {
            var word = word + "\!";
          } else if (character === "\"") {
            var word = word + "\"";
          } else {
            var word = word + character;
          }
        }
      }
    } else if (lowercaseDesicion && numberDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(2);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
        } else {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
        }
      }
    } else if (lowercaseDesicion && specialCharDesicion) {
      for (i=0; i<passwordLength; i++) {
        var arrayNum = getRandomInt(2);
        if (arrayNum == 0) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
        } else {
          var indexNum = getRandomInt(33);
          var character = specialCharString.charAt(indexNum);
          if (character === "\!") {
            var word = word + "\!";
          } else if (character === "\"") {
            var word = word + "\"";
          } else {
            var word = word + character;
          }
        }
      }
    } else if (uppercaseDesicion) {
      for (i=0; i<passwordLength; i++) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
      }
    } else if (lowercaseDesicion) {
      for (i=0; i<passwordLength; i++) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
      }
    } else if (numberDesicion) {
      for (i=0; i<passwordLength; i++) {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
      }
    } else if (specialCharDesicion) {
      for (i=0; i<passwordLength; i++) {
          var indexNum = getRandomInt(33);
          var character = specialCharString.charAt(indexNum);
          if (character === "\!") {
            var word = word + "\!";
          } else if (character === "\"") {
            var word = word + "\"";
          } else {
            var word = word + character;
          }
      }
    } 
    console.log(word);

  return word;
}

// function to generate a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}