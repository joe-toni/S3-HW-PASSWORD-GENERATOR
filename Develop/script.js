// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptUser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function promptUser()
{
  
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
var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

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
{ return (lowerCase[Math.floor(Math.random()*lowerCase.length)]);}

function getRandomDigit()
{ return  (digits[Math.floor(Math.random()*digits.length)])}

function getRandomUpper()
{ return  (upperCase[Math.floor(Math.random()*upperCase.length)])}

function getRandomSymbol()
{  return (symbols[Math.floor(Math.random()*  symbols.length)]);}

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


let generatePassword = function()
{
  let result = '';
  const includedTypes = includeLower + includeUpper + includeDigits + includeSymbols;
  if(includedTypes === 0 )
  { return 'Please select at least one character type' ;}
  
  else
  {
    for(i = 0; i < selectedLength; i+=0)
    {
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

    console.log(result);
    let endResult = scramble(result);
    console.log(endResult);
    
    return (endResult);
  }
}