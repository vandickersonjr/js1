// let fav = ['Black Panther', 3, true, 2003];
//
// // console.log(fav.length);
//
// // console.log(Array.isArray(fav));
//
// console.log(fav);
//
// //Adding element to  end of array
//
// fav.push("Bowls");
//
// //Adding element to beginning of array
//
// // fav.unshift("Bowls");
//
// console.log(fav);
//
// //Access the last member of the array
//
// console.log(fav[fav.length - 1]);
//
// //Access the second-to-last member of the array
//
// console.log(fav[fav.length - 2]);
//
// //Removes last element
//
// // console.log(fav.pop());
//
// //Removes first element
//
// // console.log(fav.shift());
//
// //Removes and saves first element
// // let first = fav.shift();
//
// // console.log(fav, first);
//
// //will remove that element and everything after
// // fav.splice(2);
//
// // fav.splice(2, 1);
//
// //Remove the second index and replace it with false
//
// // fav.splice(2, 1, false, "Rocky")
//
// // console.log(fav, "this is the result of splice");
//
// console.log(fav, 'before');
//
// let removeItems = fav.splice(2, 1, false, "Rocky");
//
// console.log(removeItems, 'the item removed');
//
// // Make copy of original
//
// // let copy = fav.slice()
// // console.log(fav)
// // console.log(fav.indexOf("Rocky"))
// // console.log(fav)
//
// // const products = [["blanket", [12.99, 10.99], "The best blanket"], ["rattle", 4.99, "Its a rattle man..."], ["diapers", 10.99, "They catch the doo doo"]];
// // alert(products[0][1][1]);
//
// let favMovie = ["Lion King", "Simba"];
// let secondFav = ["MIB", "K"];
// let thirdFav = ["Black Panther", "T'Challa"];
//
// let favoriteMovies = [];
//
// favoriteMovies.push(favMovie, secondFav, thirdFav);
//
// let titles = [];
// titles.push(favoriteMovies[0][0], favoriteMovies[1][0]);
//
// alert(titles);

// step 1
toDo = []; //Declare the array

let toDo1 = [prompt('What is the first task on your todos list?', 'laundry')]; //add first array

let toDo2 = [prompt('What is the second task on your todos list?', 'shopping')]; //add second array

let toDo3 = [prompt('What is the third task on your todos list?', 'party')]; //add third array

toDo.push(toDo1, toDo2, toDo3); //add elements to array

// step 2

for(let i = 0; i < toDo.length; i++) { //add days next to each index

  let timeline = prompt(`How many days will it take to get ${toDo[i][0]} done?`, '2');

  timeline = !isNaN(parseInt(timeline)) ? parseInt(timeline) : 2;

  toDo[i].unshift(timeline);
}

// console.log(toDo, 'after adding time it will take')

toDo.sort();

// console.log(toDo, 'after sort')


let longest = toDo[0]
let j = 0;
while (j < toDo.length) {
if(toDo[j][0] > longest[0]) longest = toDo[j]
  j++
}
  longest.push('this');


let k = 0;

do {
  if(toDo[k][toDo[k].length - 1] !== "this") {
    toDo[k].push("done");
  }
  k++
} while(k < toDo.length);

//step 5

let doneItems = [];

toDo.forEach(toDo => {
  if(toDo[toDo.length - 1] === 'done') doneItems.push(toDo);
});

alert(doneItems);

console.log(doneItems);
