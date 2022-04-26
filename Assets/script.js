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


// This checks the length selected
function passwordLengthChecker() {
  let passwordLength = prompt(
    "Select a password length between 8 and 128 characters."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    alert("The value has to be in between 8 and 128 characters");
    passwordLengthChecker();
  }
}


//This checks if the user wants capital , lower or both  casing.
function casing() {
  let casingType = prompt("Do you want uppercase, lowercase or both?");
// Alternative would be using the bitwise value of each character to create the arrays. I will attempt this week
  const alphabetCapital = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const alphabetLower = alphabetCapital.map(function (x) {
    return x.toLowerCase();
  });

  let upperCaseOptions = ["uppercase", "upper case", "upper"];
  let lowerCaseOptions = ["lowercase", "lower case", "lower"];

  const bothTypes = alphabetCapital.concat(alphabetLower);

  if (casingType.toLowerCase() == "both"){
    return bothTypes;
  } else if (upperCaseOptions.includes(casingType.toLowerCase())){
    return alphabetCapital;
  } else if (lowerCaseOptions.includes(casingType.toLowerCase())) {
    return alphabetLower;
  } else {
    alert("Wrong input value");
    casing();
  }
}

//NUMERICS
function numbering() {
  let numeric = prompt("Do you want numbers? YES/NO?");
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (numeric.toLowerCase() == "yes") {
    return numberArray;
  }
  if (numeric.toLowerCase() == "no") {
    return [];
  } else {
    alert('Wrong input, type "YES" or "NO"');
    numbering();
  }
}

// SPECIAL CHARACTERS
function specialCharactersChecker() {
  let specialChar = prompt("Do you want special characters? YES/NO");

  const specialCharacters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  if (specialChar.toLowerCase() == "yes") {
    return specialCharacters;
  } else if (specialChar.toLowerCase() == "no") {
    return [];
  } else {
    alert('Type "YES" or "NO"');
    specialCharactersChecker();
  }
}

// Random array element selector
function randomSelector(array) {
  let index = Math.floor(Math.random() * array.length);
  let value = array[index];
  return value;
}

// This function checks if the the password contains at least one from each type.
function isTrue(arr, arr2, i) {
  if (arr.every((i) => arr2.includes(i))) {
    i--;
  }
}

// This generates the password by combining the arrays from the different choices that the user made.
function generatePassword() {
  // This arrays will contain the values that the user selected.
  let passwordLengthValue = passwordLengthChecker();
  let casingType = casing();
  let numbersAdder = numbering();
  let specialCharactersArray = specialCharactersChecker();

  // Global array combining choices. If the user didnt want numbers, the array added would have no values.
  let globalOptions = casingType.concat(numbersAdder, specialCharactersArray);

  // 
  let finalPassword = [];
  for (let i = 0; i < passwordLengthValue; i++) {
    finalPassword.push(randomSelector(globalOptions));
    // Before the password reaches the desired length, we will check if it contains at least one character from each type.
    if (i == passwordLengthValue - 1) {
      isTrue(finalPassword, casingType, i);
      isTrue(finalPassword, numbersAdder, i);
      isTrue(finalPassword, specialCharactersArray, i);
    }
  }
  return finalPassword.join("");
}
