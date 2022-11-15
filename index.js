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

let aString =
  'Multitasking – the art of doing twice as much as you should half as well as you could.';
let anotherString = 'Hello and こんにちは';

let aNumber = 123.456;
let anotherNumber = 987;

let aBoolean = true;

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

// ----------------------------------------------------------------------------

// Types

print(123);
// print(aNumber);
// print(typeof aNumber);
// print(aString);
// print(typeof aString);
// print(aBoolean);
// print(typeof aBoolean);
// print(anArray);
// print(typeof anArray);
// print(colors);
// print(typeof colors);

// ----------------------------------------------------------------------------
// Define variables:
// let myFirstVariable;

// Define and initialize
// let mySecondVariable = "Hello";
// const myFirstConstant = 3.14;

// Why no var? It moved declaration at the top of the function. Replace var with let to see the difference
// function test() {
//   print(betterDoNotUse);
//   var betterDoNotUse = 1;
//   print(betterDoNotUse);
// }
// test();

// ----------------------------------------------------------------------------

// Assigning
// let n=10;
// print(`n=${n}`);
// n = n + 2;
// print(`n=${n}`);

// ----------------------------------------------------------------------------

// Operators
// +, -, *, /, %, **
// n = n+3*(n-2);
// print(`n=${n}`);
// n = n % 10;
// print(`n=${n}`);
// n = n ** 4;
// print(`n=${n}`);
// ++n;
// print(`n=${n}`);
// --n;
// print(`n=${n}`);
// n--;
// print(`n=${n}`);
// n=5;
// let n2 = ++n;
// print(`n2=${n2}, n=${n}`);
// n=5;
// let n3 = n++;
// print(`n3=${n3}, n=${n}`);

// ----------------------------------------------------------------------------

// Assignment operators

// +=, -=, *=, /=
// n=20;
// let n4 = 10;
// n4 += n;
// print(`n4=${n4}`);

// ----------------------------------------------------------------------------

// Working with Strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// length, charAt(), concat(), indexOf(), slice(), trim()

// Excurse: regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// String methods with regular expressions: match(), split()

// ----------------------------------------------------------------------------

// Comparison operators, and if...else...
// ===, !==, <, >, <=, >=

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

// ----------------------------------------------------------------------------

// Comparing == and ===
// === is false if the type is different
/*
a=0
b=""
a===b
a==b
*/

// ----------------------------------------------------------------------------

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

// const multiply = (x, y) => { return x*y; }
// const multiply = (x, y) => x*y;

// print(multiply(6,7));

// ----------------------------------------------------------------------------

// Loops
// for(;;), for..in.., for..of.., while, do..while, forEach

// for (let i=1; i<=4; i=i+1) {
//   print(i);
// }
// print(`anArray = [${anArray}]`);
// for (let i=0; i<anArray.length; ++i) {
//   print(`for loop: i=${i}, anArray[${i}]=${anArray[i]}`);
// }

// for (let index in colors) {
//   print(`index=${index}`);
// }
// for (let color of colors) {
//   print(`color=${color}`);
// }
// for (let [index, color] of Object.entries(colors)) {
//   print(`index=${index}, color=${color}`);
// }

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

// function display(v, i) {
//   print(`v=${v}, i=${i}`);
// }
// anArray.forEach(display);
// anArray.forEach((v, i) => {print(`v=${v}, i=${i}`);});
// anArray.forEach((x) => {print(`x=${x}`);});

// outputDiv.innerText += JSON.stringify(aSong, null, 4);
// let listOfSongs = [aSong, anotherSong, thirdSong, fourthSong];
// outputDiv.innerText += JSON.stringify(listOfSongs, null, 4);

// ----------------------------------------------------------------------------

// Button interactive (change counter)

// document.getElementById('buttons').style.display="inline";
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

// ----------------------------------------------------------------------------

// Number guessing game

const myForm = document.getElementById('form');
let targetNumber = Math.floor(Math.random() * 100) + 1;
let guessCounter = 1;

console.log(`The secret number is ${targetNumber}`);
function validate() {
  const guessedNumber = Number.parseInt(
    document.getElementById('numberField').value
  );
  print(`Value is ${guessedNumber}`);
  if (guessedNumber == targetNumber) {
    print(`You found the secret number in ${guessCounter} tries!`);
  } else {
    ++guessCounter;
    if (guessedNumber < targetNumber) {
      print('Your guess is too low.');
    } else {
      print('Your guess is too high.');
    }
  }
}
myForm.addEventListener('submit', validate);
document.getElementById('gameArea').style.display = 'inline';
