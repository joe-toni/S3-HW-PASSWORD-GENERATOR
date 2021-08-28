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


var slider = document.getElementById("length-selector");
var sliderOutput = document.getElementById("slider-value");
var selectedLength = +slider.value;

sliderOutput.innerHTML =  slider.value;

slider.oninput = function()
{
  selectedLength = +this.value;
  sliderOutput.innerHTML =  this.value;
}

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var digits = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~ ';

var includeLower = true;
var includeUpper = true;
var includeDigits = true;
var includeSymbols = true;

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

const  randomSelection = 
 {
  lower : getRandomLower(),
  upper: getRandomUpper(),
  digit: getRandomDigit(),
  symbol: getRandomSymbol()
};

function getRandomLower()
{const value = lowerCase[Math.floor(Math.random()*lowerCase.length)];
console.log(value);
return value;}

function getRandomDigit()
{ return  (digits[Math.floor(Math.random()*digits.length)])}

function getRandomUpper()
{ return  upperCase[Math.floor(Math.random()*upperCase.length)]}

function getRandomSymbol()
{ return  (symbols[Math.floor(Math.random()*  symbols.length)])}


let generatePassword = function()
{
  let result = '';
  const includedTypes = includeLower + includeUpper + includeDigits + includeSymbols;
  console.log(typeof(includedTypes));
  if(includedTypes === 0 )
  { return 'Please select at least one character type' ;}
  
  else
}