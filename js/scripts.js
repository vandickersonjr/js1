//FUNCTIONS
// console.log("Hello World!");
// array.pop();

// function capitalCase(string) {
  //defining the function has no value
  // let words = string.split(' ');
  // words.forEach(words => {
  //   let letters = words.split('');
  //   let capped = letters[0].toUpperCase();
  //   letters.splice(0, 1, capped);
  // })
  // return words.join(' ');
// };
  //call the function gives it value
// let newString = capitalCase("peter piper");
//
// console.log(newString);
//
// function (stuff) { //anonymous function

// }

//Function declaration is hoisted while function expression is not hoisted

// var myCoolFunction = function(stuff) {
//   console.log(stuff); //function expression will not be hoisted
// }

// function myCoolFunction(stuff) {
//   console.log(stuff); //function declaration will be hoisted
// }

// let myCoolFunction = () => {//Simplest fat arrow function
  // console.log('stuff');
// }

//Function the order of the argument does matter

// function divide(arg1, arg2) {
//   return arg2 / arg1;
// }

//function functionName(functionArgument) {
//     return functionParameters
// }

// function ageDog(years) {
//   return  years * 7
// };
//
// alert(ageDog(parseInt(prompt("How old is your dog in years?", "3"))));

// Try it out #2

// function lifetimeCalculator(age, dailyUse, deathAge) {
//   if(!isNaN(age) && !isNaN(dailyUse) && !isNaN(deathAge)) {
//     return (deathAge - age) * (dailyUse * 365);
//   } else {
    // userAge = prompt('How old are you?', '30');
    // userUse = prompt('How much do you use every day?');
    // userDeath = prompt("When you gonna die doe?");
    // lifetimeCalculator(parseInt(userAge), parseInt(userUse));
//   }
// };

// let userAge = prompt('How old are you?', '30');
// let userUse = prompt('How much do you use every day?', '1');
// let userDeath = prompt("When you gonna die doe?");
//
// let usage = parseInt((userDeath - userAge) * (userUse * 365));
//
// alert(`You will need ${usage} to last until your 80.`);

// Takehome 1 & 2

function powerOfTwo(number) {
  if(!isNaN(number)) {
  return number * number;
} else {
  let answer = powerOfTwo(parseInt(prompt("Please enter number", "2")));
  alert(answer);
}
};

  let answer = powerOfTwo(parseInt(prompt("What do you want to square?", "2")));
  alert(answer);

  // Takehome 3

  function parseString(string) {
    let parsedLetter = string.charAt(0).toUpperCase();
    let stringArr = string.split('');
    stringArr.splice(0, 1, parsedLetter);
    string = stringArr.join(''); //Replaces the first letter with the new uppercase letter
    if(string.charAt(string.length - 1) !== '.') string = string + '.';
    return string;
  }

  let answer2 = parseString(prompt("Type something in.", "i heart dark chocolate"));
  alert(answer2);

  // Takehome 4

  function reverseHalves(string) {
    let halfIndex = string.length / 2;
    let firstHalf = string.substring(0, halfIndex);
    let secondHalf = string.substring(halfIndex, string.length);
    console.log(halfIndex);
    alert(`${secondHalf}${firstHalf}`);
  }
  reverseHalves(prompt("Write a sentence", "What happened"));

  // Takehome 5

  function isPalindrome(string) {
    let reversed = string.split('').reverse().join(''); //split returns an array, reverse and join works only on arrays
    return string === reversed ? true : false;
  }

  alert(string);
