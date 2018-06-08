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
