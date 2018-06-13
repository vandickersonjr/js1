let body = document.getElementsByTagName('body');

console.log(body[0]);

let classes = document.getElementsByClassName("my-header");

console.log(classes[0]);

let id = document.getElementById("my-paragraph");

console.log(id);

// Newer Methods:
let tag = document.querySelector('body');

console.log(tag);

let myClass = document.querySelector('.my-header');

console.log(myClass);

let myId = document.querySelector('#my-paragraph');

console.log(myId);

let tags = document.querySelectorAll('body');

console.log(tags);

// Try it out
function queryDom(methodName, element) {
  switch(methodNamecase.toLowerCase()) {
    case 'getelementsbytagname':
    document.getElementsByTagName(element);
    break;
    case 'queryselector': document.querySelector(`.${element}`);
    break;
    default:
    break;
  }
};

myClass.addEventListener('click', e => { // first argument is a valid string
})
