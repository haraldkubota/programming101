// Import stylesheets
import './css/style.css';

const appDiv = document.getElementById('app');
const outputDiv = document.getElementById('output');

// Helper function
function print(s) {
  console.log(s);
  outputDiv.innerText += s + '\n';
}

// Write Javascript code!
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let aString = 'Hello and こんにちは';
let anotherString = 'Test 2 3 4';

let aNumber = 123.456;
let anotherNumber = 987;

let anArray = [10, 11, 12, 13, 14, 15];
let colors = ['yellow', 'blue', 'green', 'pink', 'gray'];
let anotherArray = [100, 101, 102, 103];

let aSong = {
  title: 'Oh No!',
  album: 'The Family Jewels',
  releaseYear: 2010,
  artist: 'Marina',
  video: 'https://www.youtube.com/watch?v=Cr-SqRWImmI',
};
let anotherSong = {
  title: 'For the damaged Coda',
  album: 'The Family Jewels',
  releaseYear: 2010,
  artist: 'Blonde RedHead',
  video: 'https://youtu.be/4Js-XbNj6Tk?t=37',
};
let thirdSong = {
  title: 'Lone Digger',
  releaseYear: 2015,
  artist: 'Caravan Palace',
  video: 'https://www.youtube.com/watch?v=UbQgXeY_zi4',
};
let fourthSong = {
  title: "Can't touch this",
  artist: 'MC Hammer',
  video: 'https://www.youtube.com/watch?v=otCpCn0l4Wo&t=15s',
  releaseYear: 1990,
};

// Follow
// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
// and
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

// Types
print(123);
print(aNumber);

print(typeof aNumber);

// let N = 10;
// if (aNumber > N) {
//   print(`${aNumber} is greater than ${N}`);
// }
// if (aNumber === N) {
//   print(`${aNumber} is strictly equal to ${N}`);
// } else {
//   print(`${aNumber} is not strictly equal to ${N}`);
// }

// let iLikeApples=true;
// let iLikeBananas=false;
// if (iLikeApples === true) {
//   print("I really like apples!");
// }
// if (iLikeApples && iLikeBananas) {
//   print("I like both apples and bananas");
// }
// if (iLikeApples || iLikeBananas) {
//   print("I like apples or bananas or both");
// }
// if (iLikeApples !== iLikeBananas) {
//   print("I like either apples or bananas");
// }

// Functions

// function multiply(x, y) {
//   return x*y;
// }
// function divide(x, y) {
//   return x/y;
// }
// print(multiply(6,7));
// print(divide(10,3));
// print(divide(5,0));
// Modify divide() to return 0 in case of y is zero

// Functions via =>
// See https://blog.bitsrc.io/arrow-functions-vs-regular-functions-in-javascript-458ccd863bc1
// for the finer details how they differ from function definition

// // const multiply = (x, y) => { return x*y; }
// const multiply = (x, y) => x*y;

// print(multiply(6,7));

// Loops

// for (let i=1; i<=4; i=i+1) {
//   print(i);
// }
// print(`anArray = [${anArray}]`);
// for (let i=0; i<anArray.length; ++i) {
//   print(`for loop: i=${i}, anArray[${i}]=${anArray[i]}`);
// }
// function display(v, i) {
//   print(`v=${v}, i=${i}`);
// }
// anArray.forEach(display);
// anArray.forEach((v, i) => {print(`v=${v}, i=${i}`);});
// anArray.forEach((x) => {print(`x=${x}`);});

// let i=0;
// while (i < anArray.length) {
//   print(`while: i=${i}, anArray[${i}]=${anArray[i]}`);
//   ++i;
// }

// i=0
// do {
//   print(`do..while: i=${i}, anArray[${i}]=${anArray[i]}`);
//   ++i;
// } while (i<anArray.length);

// outputDiv.innerText += JSON.stringify(aSong, null, 4);
// let listOfSongs = [aSong, anotherSong, thirdSong, fourthSong];
// outputDiv.innerText += JSON.stringify(listOfSongs, null, 4);

// Button interactive (change counter)

// let counter = 0;
// const leftButton = document.getElementById('leftButton');
// const middleButton = document.getElementById('middleButton');
// const rightButton = document.getElementById('rightButton');
// leftButton.innerText = '<<';
// rightButton.innerText = '>>';
// middleButton.innerText = counter;

// leftButton.addEventListener('click', function () {
//   counter = counter - 15;
//   middleButton.innerText = counter;
// });
// rightButton.addEventListener('click', function () {
//   counter = counter + 15;
//   middleButton.innerText = counter;
// });
// middleButton.addEventListener('click', function () {
//   middleButton.style.backgroundColor =
//     colors[Math.floor(Math.random() * colors.length)];
//   middleButton.style.transform = `rotate(${counter}deg)`;
//   print(counter);
// });
