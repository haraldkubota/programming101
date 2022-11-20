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

print('print() output arrives here');

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
// // Function
// print(typeof print);

// // Task: What is the type of aSong?
// // Task: What is the type of 123456789n


// ----------------------------------------------------------------------------

// // Define variables
// // Case sensitiv
// let myFirstVariable;
// let myfirstvariable;

// // Define and initialize
// let mySecondVariable = "Hello";
// const myFirstConstant = 3.14;
// // type can change:
// print(typeof mySecondVariable);
// mySecondVariable = false;
// print(typeof mySecondVariable);

// // Scope
// // Why no var? It moves declaration at the top of the function. Replace var with let to see the difference
// function test() {
//   print(betterDoNotUse);
//   var betterDoNotUse = 1;
//   print(betterDoNotUse);
// }
// // function test() {
// //   var betterDoNotUse;
// //   print(betterDoNotUse);
// //   betterDoNotUse = 1;
// //   print(betterDoNotUse);
// // }
// test();

// ----------------------------------------------------------------------------

// // Assigning values

// // Excurse: Template Strings (AKA Template Literals): String Interpolation
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// let n=10;
// print(`n=${n}`);
// n = n + 2;
// print(`n=${n}`);

// // Task: try const instead of let
// // Task: How much is 123, 0123, 0x123, 123n, 0b1111000

// ----------------------------------------------------------------------------

// Operators
// +, -, *, /, %, **

// let n=10;
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
// n = 5;
// let n2 = ++n;
// print(`n2=${n2}, n=${n}`);
// n = 5;
// let n3 = n++;
// print(`n3=${n3}, n=${n}`);

// ----------------------------------------------------------------------------

// Assignment operators

// +=, -=, *=, /=

// let n = 20;
// let n4 = 10;
// print(`n4=${n4}`);
// n4 += n;
// print(`n4=${n4}`);

// ----------------------------------------------------------------------------

// Working with Strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// length, charAt(), indexOf(), replace(), slice(), trim()

// print(aString);
// print(aString.length);
// print('14 char string'.length);
// print(aString.charAt(0));
// print(aString.charAt(1));
// // See https://www.asciitable.com/
// print(aString.charCodeAt(0));
// print(aString.indexOf('a'));
// // How to find the next 'a'?
// print(aString.indexOf('a', 7));
// print(aString.replace("twice", "two times"));
// print(aString.slice(6,20));
// print('"'+'  leading and trailing spaces     '+'"');
// print('"'+'  leading and trailing spaces     '.trim()+'"');

// // Excurse: regular expressions
// // See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// // String methods with regular expressions: match(), split()
// print(aString.split(/ /));
// print(aString.match(/\w*ou\w*/));
// let r=aString.matchAll(/\w*ou\w*/g);
// for (let match of r) {print(match[0]+" "+match.index);}

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
// == looks for falsy values: false, 0, "", []
// === is false if the type is different
// Run in the web browser console
/*
a=0
b=""
a===b
a==b
*/

// ----------------------------------------------------------------------------

// Functions

// // Named functions
// function multiply(x, y) {
//   return x*y;
// }
// const multiply = function(x, y) {
//   return x*y;
// }
// function divide(x, y) {
//   return x/y;
// }
// print(multiply(6,7));
// print(divide(10,3));
// print(divide(5,0));
// // Task: Modify divide() to return 0 in case of y is zero
// // Task: Create a function mulAdd() which returns the first argument multiplied with the next and add the value of the third one

// // The following definitions of multiply() are all functionally identical
// function multiply(x, y) {
//   return x*y;
// }
// const multiply = function(x, y) {
//   return x*y;
// }
// const multiply = (x, y) => { return x*y; }
// const multiply = (x, y) => x*y;

// print(multiply(6,7));

// // Note that function definitions are "hoisted" so they can be used before they are defined
// const myfun = () => { return "myfun works";}
// print(myfun());
// function myfun() {
//   return "myfun the normal function";
// }
// const myfun = () => { return "myfun does not work";}

// ----------------------------------------------------------------------------

// Loops
// for(;;), while, do..while, for..in.., for..of.., forEach

// for (let i=1; i<=4; i=i+1) {
//   print(i);
// }
// print(`anArray = [${anArray}]`);
// for (let i=0; i<anArray.length; ++i) {
//   print(`for loop: i=${i}, anArray[${i}]=${anArray[i]}`);
// }

// // Task: Print multiples of 7 up to 100
// // Task: Print colors in colors[] like this: "I like color1, color2, ... colorLast-1 and colorLast."
// // Hint: construct a string and add colors, commas, periods and "and" as needed.

// let i=0;
// while (i < anArray.length) {
//   print(`while: i=${i}, anArray[${i}]=${anArray[i]}`);
//   ++i;
// }

// let i=0;
// do {
//   print(`do..while: i=${i}, anArray[${i}]=${anArray[i]}`);
//   ++i;
// } while (i<anArray.length);

// When to use do..while.. or while..
// do {
//   print("Enter a number from 1 to 10");
//   number = getANumber();
// } while (number >= 1 && number <=10);
// for (let index in colors) {
//   print(`index=${index}`);
// }
// for (let color of colors) {
//   print(`color=${color}`);
// }
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// for (let [index, color] of Object.entries(colors)) {
//   print(`index=${index}, color=${color}`);
// }

// // forEach method

// function display(v, i) {
//   print(`v=${v}, i=${i}`);
// }
// anArray.forEach(display);
// // Anonymous function:
// anArray.forEach((v, i) => {print(`V=${v}, I=${i}`);});
// anArray.forEach((x) => {print(`x=${x}`);});

// outputDiv.innerText += JSON.stringify(aSong, null, 4)+"\n";;
// let listOfSongs = [aSong, anotherSong, thirdSong, fourthSong];
// outputDiv.innerText += "\n"+JSON.stringify(listOfSongs, null, 4);

// ----------------------------------------------------------------------------

// JSON: JavaScript Object Notation
// Simply a String representation of a JavaScript Opject:
// let car = {
//   color: 'red',
//   wheels: ['front left', 'front right', 'rear left', 'rear right'],
//   buildYear: 2022,
//   powerSource: {
//     hasBattery: true,
//     hasCombustionEngine: true,
//   },
//   model: 'カローラ',
//   brand: 'Toyota',
// };
// print(car.color);
// print(car.buildYear);
// print(car.brand);
// if (car.wheels.length === 4)
//   print("It's a car with the normal amount of wheels");
// else print("It's a car with an unusual amount of wheels");

// // Adding a new property:
// car.isHybrid = true;
// print(car);
// print(JSON.stringify(car, null, '  '));

// // Task: Create a JSON structure with 5 city hall addresses
// // Take them from https://tabunka.tokyo-tsunagari.or.jp/guide_eng/gov/01.html
// // Print them all out like this (using Tama as an example):
// // City Office Tama
// // Sekido 6-12-1
// // 206-8666 Tama-shi
// // Tel: (042) 375-8111

// ----------------------------------------------------------------------------

// Task: Install Node.js, VSCode
// NPM
// Install javascripting: npm install -g javascripting
// Run javascripting for review

// ----------------------------------------------------------------------------

// More data structures: Class, Set
// ----------------------------------------------------------------------------

// Button interactive (change counter)

document.getElementById('buttons').style.display="inline";
let counter = 0;
const leftButton = document.getElementById('leftButton');
const middleButton = document.getElementById('middleButton');
const rightButton = document.getElementById('rightButton');
leftButton.innerText = '<<';
rightButton.innerText = '>>';
middleButton.innerText = counter;

leftButton.addEventListener('click', function () {
  counter = counter - 15;
  middleButton.innerText = counter;
});
rightButton.addEventListener('click', function () {
  counter = counter + 15;
  middleButton.innerText = counter;
});
middleButton.addEventListener('click', function () {
  middleButton.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  middleButton.style.transform = `rotate(${counter}deg)`;
  print(counter);
});

// ----------------------------------------------------------------------------

// Number guessing game

// const myForm = document.getElementById('form');
// let targetNumber = Math.floor(Math.random() * 100) + 1;
// let guessCounter = 1;

// console.log(`The secret number is ${targetNumber}`);
// function validate() {
//   const guessedNumber = Number.parseInt(
//     document.getElementById('numberField').value
//   );
//   print(`Value is ${guessedNumber}`);
//   if (guessedNumber == targetNumber) {
//     print(`You found the secret number in ${guessCounter} tries!`);
//   } else {
//     ++guessCounter;
//     if (guessedNumber < targetNumber) {
//       print('Your guess is too low.');
//     } else {
//       print('Your guess is too high.');
//     }
//   }
// }
// myForm.addEventListener('submit', validate);
// document.getElementById('gameArea').style.display = 'inline';
