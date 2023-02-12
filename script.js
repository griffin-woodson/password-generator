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
  var passwordLength = window.prompt("Enter desired password length");
  //checking password length is a number between 8 and 128
  while(isNaN(passwordLength) || passwordLength<8 || passwordLength>128) {
    if (isNaN(passwordLength)) {
        passwordLength = window.prompt("Please enter the length of the password you would like as a number");
    } else {
        passwordLength = window.prompt("The length of the password you would like must be between 8 and 128");
    }
  }
  var specialCharChoice = window.confirm("Include special characters?");
  var numberChoice = window.confirm("Include numbers?");
  var lowercaseChoice = window.confirm("Include lowercase letters?");
  var uppercaseChoice = window.confirm("Include uppercase letters?");
  // Checking at least one character type is chosen
  while (!specialCharChoice && !numberChoice && !lowercaseChoice && !uppercaseChoice) {
    specialCharChoice = window.confirm("Include special characters?");
    numberChoice = window.confirm("Include numbers?");
    lowercaseChoice = window.confirm("Include lowercase letters?");
    uppercaseChoice = window.confirm("Include uppercase letters?");
  }
  // Using arrays and random numbers to generate a password through for loop
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = [0,1,2,3,4,5,6,7,8,9]
  var specialCharString = "\!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //33 items, index from 0-32

    if (uppercaseChoice && lowercaseChoice && numberChoice && specialCharChoice) {
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
    } else if (uppercaseChoice && lowercaseChoice && numberChoice) {
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
    } else if (uppercaseChoice && lowercaseChoice && specialCharChoice) {
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
    } else if (uppercaseChoice && numberChoice && specialCharChoice) {
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
    } else if (lowercaseChoice && numberChoice && specialCharChoice) {
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
    } else if (uppercaseChoice && lowercaseChoice) {
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
    } else if (uppercaseChoice && numberChoice) {
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
    } else if (uppercaseChoice && specialCharChoice) {
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
    } else if (lowercaseChoice && numberChoice) {
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
    } else if (lowercaseChoice && specialCharChoice) {
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
    } else if (uppercaseChoice) {
      for (i=0; i<passwordLength; i++) {
          var indexNum = getRandomInt(25);
          var word = word + uppercaseArray[indexNum];
      }
    } else if (lowercaseChoice) {
      for (i=0; i<passwordLength; i++) {
          var indexNum = getRandomInt(25);
          var word = word + lowercaseArray[indexNum];
      }
    } else if (numberChoice) {
      for (i=0; i<passwordLength; i++) {
          var indexNum = getRandomInt(10);
          var word = word + numberArray[indexNum];
      }
    } else if (specialCharChoice) {
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

// Function to generate a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}