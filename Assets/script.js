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