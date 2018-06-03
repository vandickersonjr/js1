day3
/*
var a = "Is this equal", b = new String("Is this equal");

console.log(a === b);

console.log(a == b);
*/

/*
let numVal = prompt("Choose a number between 1 - 100", "10"); numVal2 = prompt("Choose a second number between 1 - 100", "10");

let int1 = parseInt(numVal); int2 = parseInt(numVal2);

alert(int1 + int2);

alert(int1 += int2);

alert(int1 -= int2);

alert(int1 *= int2);

alert(int1 /= int2);
*/

let userName = prompt('What is your name?', 'Mike')

let favColor = prompt('What is your favorite color?' +
'\n red, orange, yellow, green, blue, pink, purple, black, white, or grey', 'blue')

switch (favColor.toLowerCase()) {
  case 'red':
    alert(`Spicy ${userName},` + 'red is the color of chili pepper.')
    break;
  case 'orange':
    alert(`Sweet ${userName},` + ' ' + 'orange is the color of oranges.')
    break;
  case 'yellow':
    alert(`Tart ${userName},` + ' ' + 'yellow is the color of lemons.')
    break;
  case 'green':
    alert(`Sour ${userName},` + ' ' + 'green is the color of limes.')
    break;
  case 'blue':
    alert(`Bitter ${userName},` + ' ' + 'blue is the color of bluleberries.')
    break;
  case 'yellow':
    alert(`Pucker ${userName},` + ' ' + 'pink is the color of grapefruit.')
    break;
  case 'purple':
    alert(`Smack ${userName},` + ' ' + 'purple is the color of grapes.')
    break;
  case 'black':
    alert(`Ah choo ${userName},` + ' ' + 'black is the color of pepper.')
    break;
  case 'white':
    alert(`Sniff ${userName},` + ' ' + 'white is the color of onions.')
    break;
  case 'grey':
    alert(`Blah ${userName},` + ' ' + 'grey is the color of oysters.')
    break;
  default:
    alert(`Wait ${userName},` + ' ' + 'its time to take a break and eat.')
}
gh-pages
