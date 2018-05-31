let fav = ['Black Panther', 3, true, 2003];

// console.log(fav.length);

// console.log(Array.isArray(fav));

console.log(fav);

//Adding element to  end of array

fav.push("Bowls");

//Adding element to beginning of array

// fav.unshift("Bowls");

console.log(fav);

//Access the last member of the array

console.log(fav[fav.length - 1]);

//Access the second-to-last member of the array

console.log(fav[fav.length - 2]);

//Removes last element

// console.log(fav.pop());

//Removes first element

// console.log(fav.shift());

//Removes and saves first element
// let first = fav.shift();

// console.log(fav, first);

//will remove that element and everything after
// fav.splice(2);

// fav.splice(2, 1);

//Remove the second index and replace it with false

// fav.splice(2, 1, false, "Rocky")

// console.log(fav, "this is the result of splice");

console.log(fav, 'before');

let removeItems = fav.splice(2, 1, false, "Rocky");

console.log(removeItems, 'the item removed');

// Make copy of original

// let copy = fav.slice()
// console.log(fav)
// console.log(fav.indexOf("Rocky"))
// console.log(fav)

// const products = [["blanket", [12.99, 10.99], "The best blanket"], ["rattle", 4.99, "Its a rattle man..."], ["diapers", 10.99, "They catch the doo doo"]];
// alert(products[0][1][1]);

let favMovie = ["Lion King", "Simba"];
let secondFav = ["MIB", "K"];
let thirdFav = ["Black Panther", "T'Challa"];

let favoriteMovies = [];

favoriteMovies.push(favMovie, secondFav, thirdFav);

let titles = [];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0]);

alert(titles);
