//- New array that contains special characters
const specialcharArray = ["!", "#", "$", "%", "&","'", "(", ")", 
"*", "+","-",".", "/", ":", ";", "<", "=",">", "?", "@", "[", "]", "^","_", "`", "{", "|", "}", "~",";"]; 


//array that contains lower case letters

const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//array that contains all uppercase characters

const uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//array contains numeric characters
const numbers = ["0","1","2","3","4","5","6",
"7","8","9"];

const passwordChar = []; //creating an array but there is nothing in it yet. Once the user chooses, they all go into this array.

//references the html

var generateBtn = document.querySelector("#generate");


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

//prompts use for number of characters they would like to use

function generatePassword() {
var numOfChars = prompt("How many characters in your password would you like to use? It can be between 8 and 128 characters.");
console.log(numOfChars);  

//if number of characters is less than 8, prompt "greater than/less than..." alert. If number of characters is greater than 128, prompt "greater than/less than..." alert

if (numOfChars < 8 || numOfChars > 128) {alert("Please choose greater than 8 characters and less than 128 characters!")
generatePassword()
};

//confirm if user wants lowercase letters
var lowerCase = confirm("Do you want lowercase letters in your password?");
console.log(lowerCase);

//confirm if user wants uppercase letters
var upperCase = confirm("Do you want uppercase letters in your password?");
console.log(uppercaseArray);

//confirm if user wants numeric characters
var numericVariable = confirm("Do you want numeric characters in your password?");
console.log(numericVariable);

//confirm if user wants special characters
var specialChar = confirm("Do you want special characters in your password?");
console.log(specialChar);

//If the user chooses nothing for lowercase, uppercase, numberic,special characters, alert "you have to choose at least one"
if (!lowerCase && !upperCase && !numericVariable && !specialChar) {alert("You have to choose at least one!")
generatePassword()
};


if (lowerCase) {passwordChar.push.apply(passwordChar, lowercaseArray)}; //if lowercase confirmation is true push passwordchar array which would then push lowercasearray. If they want lowercase, it will put it into the available characters.

if (upperCase) {passwordChar.push.apply(passwordChar, uppercaseArray)}; //if uppercase confirmation is true push passwordchar and upper case array

if (specialChar) {passwordChar.push.apply(passwordChar, specialcharArray)}; //if uppercase confirmation is true push passwordchar and specialcharrarray case array

if (numericVariable) {passwordChar.push.apply(passwordChar, numbers)}; //if uppercase confirmation is true push passwordchar and numbers array
//gives password an empty value to be randomly generated in later
let password = "";

console.log(numOfChars);

//picks random variables from the created arrays
for (let index = 0; index < numOfChars; index++) {
   password += passwordChar[Math.floor(Math.random()*passwordChar.length)];
   console.log(password);
}
//spits out a password
return password;

}



// // Write password to the #password input.
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;



 }









 //genrateBtn pulls the button id "generate" from HTML. Event listener generates button to execute a function when a user clicks on a button.

generateBtn.addEventListener("click", writePassword);

