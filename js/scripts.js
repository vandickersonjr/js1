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

function userAge(age, dailyUse) {
  const death = 80;
  return (death - age) * 365;
}

alert(userAge(parseInt(prompt("How old are you?", "25")))) 
