//  Here we obtain the references to several objects from the HTML file to 
// be used later on in the script, this includes some interation buttons and the prompt modals
var generateBtn = document.querySelector("#generate");

var firstModal = document.getElementById("firstModal");
var secondModal = document.getElementById("secondModal");

var firstCloseBtn = document.getElementById("firstClose");
var secondCloseBtn = document.getElementById("secondClose");

var firstContinueBtn = document.getElementById("firstContinue");
var secondContinueBtn = document.getElementById("secondContinue");




// This is the initial function provided for writing then presenting the password but it
// is now called by a different button after prompting the user for adjustments.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The next series of fuctions used to respond appropriatly to specific button clicks, 
//  closing the widow if the x is click and proceeding through the steps if the continue is clicked
function opentFirstPrompt()
{
  firstModal.style.visibility = 'visible';
  firstModal.style.zIndex = "1"
}

function answerFirstPrompt()
{
  openSecondPrompt();
  closeFirstPrompt();
  
}

function closeFirstPrompt()
{
  firstModal.style.visibility = 'hidden';
  firstModal.style.zIndex = "-1";
}

function openSecondPrompt()
{
  secondModal.style.visibility = 'visible';
  secondModal.style.zIndex = "1";
}

function answerSecondPrompt()
{
  closeSecondPrompt();
  writePassword();

}

function closeSecondPrompt()
{
  secondModal.style.visibility = 'hidden';
  secondModal.style.zIndex = "-1"
}

// These are the event listeners that call thier respective function listed above.
// The first three step through presenting the prompts that adjust and generate the password.
generateBtn.addEventListener("click", opentFirstPrompt);
firstContinueBtn.addEventListener("click", answerFirstPrompt);
secondContinueBtn.addEventListener("click", answerSecondPrompt);
//These two  event lisenters simply close the prompts without finishing the password.
firstCloseBtn.addEventListener("click", closeFirstPrompt);
secondCloseBtn.addEventListener("click", closeSecondPrompt);

// Here we obtain the elements for the length selecting slider and it's responsive title as well as
// setting up the value that will be referenced to form the length of the password.
var slider = document.getElementById("length-selector");
var sliderOutput = document.getElementById("slider-value");

//This assures the password starts at a base value even if the user doesn't adjust the legth selecting slider.
var selectedLength = +slider.value;

// This assures the slider value displays the initial minimum value of the range selector.
sliderOutput.innerHTML =  slider.value;

//This function adjusts the value that will be referenced when writing the password and the number displayed
// on the label of the length selector every time it is adjusted.
slider.oninput = function()
{
  selectedLength = +this.value;
  sliderOutput.innerHTML =  this.value;
}

// Here we set up the strings that will be referenced when randomly selecting characters.
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var digits = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

// Here are a series of boolean variables that will be used to check which character groups to include.
// By default the values are true to match the stating conditions set up in the orginal HTML file.
var includeLower = true;
var includeUpper = true;
var includeDigits = true;
var includeSymbols = true;

// The next portion obtains the button elements that will toggle the character groups to be included and
// sets up its respective function to adjust the boolean variable every time it is clicked on by the user.
var lowerCaseButton = document.getElementById("lowerCaseBtn")
lowerCaseButton.oninput = function()
{
  if (lowerCaseButton.checked) {includeLower = true;}
    else {includeLower =  false;}
}

var digitsButton = document.getElementById("digitsBtn")
digitsButton.oninput = function()
{
  if (digitsButton.checked) {includeDigits = true;}
    else {includeDigits =  false;}
}

var upperCaseButton = document.getElementById("upperCaseBtn")
upperCaseButton.oninput = function()
{
  if (upperCaseButton.checked) {includeUpper = true;}
  else {includeUpper =  false; }
}

var symbolsButton = document.getElementById("symbolsBtn")
symbolsButton.oninput = function()
{
  if (symbolsButton.checked) {includeSymbols = true; }
  else {includeSymbols =  false;}
}

// The following are simple functions that will select a random character from its respective string 
// treating it as an array type object to obtain a random position and return its string value.
function getRandomLower()
{ return (lowerCase[Math.floor(Math.random()*lowerCase.length)]);}

function getRandomDigit()
{ return  (digits[Math.floor(Math.random()*digits.length)])}

function getRandomUpper()
{ return  (upperCase[Math.floor(Math.random()*upperCase.length)])}

function getRandomSymbol()
{  return (symbols[Math.floor(Math.random()*  symbols.length)]);}

// This function takes in a string as an arguement and splits it so that its characters can be stored in an array type object. 
// It then goes through the entire length of the array swaping the value in every index with the  value a randomly selected index 
// assuring each value has a chance to be moved around. It then returns a  joined string version of the array used to scramble its values.
function scramble(currentResult)
{
  var scrambledResult = currentResult.split("");
  for(i = 0; i < scrambledResult.length; i++)
    {
      var randomIndex = Math.floor(Math.random()*scrambledResult.length);
      var initial = scrambledResult[i];
      scrambledResult[i] = scrambledResult[randomIndex];
      scrambledResult[randomIndex] = initial;
    }
    return scrambledResult.join("");
}


// This is the function that will generate the final password it will be referenced after each stepping through the prompts.
// it uses base values originally established to avoid null values when forming the password.
let generatePassword = function()
{
  // Initialize an empty string to be appended as values are obtained
  let result = '';
  // Initialize a variable used to count how many character groups the user wants to include in the password.
  const includedTypes = includeLower + includeUpper + includeDigits + includeSymbols;
  // Check to see if at least one character type is selected ending the fucntion if none are and asking the user to try again.
  if(includedTypes === 0 )
  { return 'Please select at least one character type' ;}
  // Proceed with the function if at least one character group is selected to be used.
  else
  {
    // Set up a loop that will itterate while i is less the length selected by the user never automatically incramentin i.
    for(i = 0; i < selectedLength; i+=0)
    {
      // The next series of  if statements checks to see if its particular group is included in the forming of the password and if 
      // i has reached the desired length selected by the user signaling a string of the corret lenght. Only appending and incramenting
      // if both conditions are met.
      if (includeLower && i < selectedLength)
      {
        i++;
        result += getRandomLower();
      }
      if (includeUpper && i < selectedLength)
      {
        i++;
        result += getRandomUpper();
      }
      if (includeDigits && i < selectedLength)
      {
        i++;
        result += getRandomDigit();
      }
      if (includeSymbols && i < selectedLength)
      {
        i++;
        result += getRandomSymbol();
      }
    }
    // Here we take the password formed in the loop and gives is to a function for scrambling for improved secruity saving it in a new string variable.
    let endResult = scramble(result);
    // Finally we return the endResult string to be displayed by the original write password function.
    return (endResult);
  }
}