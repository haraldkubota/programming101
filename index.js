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
  title: "Can't touch this",
  artist: 'MC Hammer',
  video: 'https://www.youtube.com/watch?v=otCpCn0l4Wo&t=15s',
  releaseYear: 1990,
};

// Follow
// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
// and
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
// https://www.javascripttutorial.net/

// ----------------------------------------------------------------------------

// A comment, anything after // will be ignored
/*
This is a comment
too which can cover more lines
*/

/* This works too */
// But not this: /* Comment /* with more comments */ */

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
// // Task: What is the type of 123456789n?
// // Task: What is the type of 0x10 and 'c' and "c"?

// ----------------------------------------------------------------------------

// // Define variables
// // Case sensitiv
// // use camelCase (AKA lower camelCase, or dromedaCase)
// // Pascal uses Pascalcase (AKA upper camel case)
// // Python usually uses snake_case
// // Be idiomatic and use the "normal" convention.

// let myFirstVariable;
// let myfirstvariable;

// // Define and initialize
// let mySecondVariable = "Hello";
// const myFirstConstant = 3.14;
// // type can change:
// print(typeof mySecondVariable);
// mySecondVariable = false;
// print(typeof mySecondVariable);

// // Scope: let and const: block scope. var: function scope.

// // Why no var? It moves declaration at the top of the function. Replace var with let to see the difference
// // See also https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

// test();

// function test() {
//   print(betterDoNotUse);
//   var betterDoNotUse = 1;  // Declaration hoisting happening here!
//   print(betterDoNotUse);
// }
// // Identical to:
// function test() {
//   var betterDoNotUse;      // Declaration is hoisted
//   print(betterDoNotUse);
//   betterDoNotUse = 1;
//   print(betterDoNotUse);
// }
// // Better:
// function test() {
//   let betterNotUse;
//   print(betterDoNotUse);
//   betterDoNotUse = 1;
//   print(betterDoNotUse);
// }

// Note that the functions are hoisted before they are being used by test();

// Using const instead of let. Primitives work as you'd expect:
// const a=10;
// print(a);
// // error when I try a=20;

// TL;DR: do variable declarations inside a block at its very top.
// Do not use var, use let or const instead.
// Use const if possible to avoid accidental changes.

// ----------------------------------------------------------------------------

// // Assigning values

// // Excurse: Template Strings (AKA Template Literals): String Interpolation
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// // and https://en.wikipedia.org/wiki/String_interpolation 

// let n = 10;
// print(`n=${n}`);
// n = n + 2;
// print(`n=${n}`);

// // Task: try const instead of let
// // Task: How much is 123, 0123, 0x123, 123n, 0b1111000

// ----------------------------------------------------------------------------

// Operators
// +, -, *, /, %, **

// let n = 10;
// n = n + 3 * (n - 2);
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

// More mathematical operations are possible via the Math global object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// ----------------------------------------------------------------------------

// Assignment operators

// +=, -=, *=, /=, %=, &=, |= etc.

// let n = 20;
// let n4 = 10;
// print(`n4=${n4}`);
// n4 += n;
// print(`n4=${n4}`);

// ----------------------------------------------------------------------------

// Working with Strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// length, charAt(), charCodeAt(), indexOf(), replace(), replaceAll(), slice(), trim()

// print(aString);
// print(aString.length);
// print('14 char string'.length);
// print(aString.charAt(0));
// print(aString.charAt(1));
// print(aString.charCodeAt(1));
// // See https://www.asciitable.com/
// // Find the first 'a'
// print(aString.indexOf('a'));
// // How to find the next 'a'?
// print(aString.indexOf('a', 7));
// print(aString.replace("twice", "two times"));
// print(aString.slice(6,20));
// print('"'+'  leading and trailing spaces     '+'"');
// print('"'+'  leading and trailing spaces     '.trim()+'"');
// How to handle ' and " in strings:
// print('Double quote:" Single quote:\' Backslash:\\');
// print("Double quote:\" Single quote:' Backslash:\\");

// // Excurse: regular expressions
// // See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// // String methods with regular expressions: match(), split()
// print(aString.split(/ /));
// print(aString.match(/\w*ou\w*/));
// let r=aString.matchAll(/\w*ou\w*/g);
// for (let match of r) {print(match[0]+" at index "+match.index);}



// ----------------------------------------------------------------------------

// Comparison operators, and if...else...
// ===, !==, <, >, <=, >=, !, && and ||

// let N = 10;
// if (aNumber > N) {
//   print(`${aNumber} is greater than ${N}`);
// }
// if (aNumber === N) {
//   print(`${aNumber} is strictly equal to ${N}`);
// } else {
//   print(`${aNumber} is not strictly equal to ${N}`);
// }

// let iLikeApples = true;
// let iLikeBananas = false;
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

// // ! is the not operator: it flips true to false and false to true
// // Operator priorities: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

// // Thus those 2 are equivalent:
// let a = 4; let b = 2+2;
// if (a === b) print("a is equal to b");
// if (!(a !== b)) print("a is not different from b");
// print("changing b to 5");
// b = 5;
// if (a < b) print("a is less than b");
// if (! (a > b)) print ("a is not larger than b");
// if (!!! (a > b)) print ("a is not not not larger than b");


// ----------------------------------------------------------------------------

// Comparing == and ===
// == looks for falsy values: false, 0, "", [] (see https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
// === is false if the type is different
// See https://developer.mozilla.org/en-US/docs/Glossary/Falsy

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

// // HOMEWORK
// // Create a function which gets a number as an argument and it returns a string
// // whether the argument is negative, even or odd
// // Create a function which prints out the correct answer for
// // https://en.wikipedia.org/wiki/Fizz_buzz for a given number

// ----------------------------------------------------------------------------

// Arrays/Lists, push(), pop(), shift(), slice()

// let myEmptyArray = [];
// let arr1 = [10, 11, 12];
// let arr2 = [10, 11, 12];
// if (arr1 === arr2) {
//   print('arr1 and arr2 are equal');
// } else {
//   print('arr1 and arr2 are not equal');
// }
// let arr3 = arr1;
// if (arr1 === arr3) {
//   print('arr1 and arr3 are equal');
// } else {
//   print('arr1 and arr3 are not equal');
// }

// // see https://notionalmachines.github.io/nms/StackAndHeapDiagram-4.html
// // or https://www.javascripttutorial.net/javascript-pass-by-value/

// // Where are the objects?
// // Primitives (number, string, boolean) are on the stack
// // Objects (functions, objects) are on the heap
// // See https://felixgerschau.com/javascript-memory-management/


// let arr4 = Array(10);
// print(arr4);
// arr4.push(1);
// print(arr4);
// arr4[1] = 2;
// print(arr4);
// arr4.fill(3);
// print(arr4);
// // let arr5=arr4.map((v,i) => i+10);
// // Same as:
// let arr5 = [];
// for (let i = 0; i < arr4.length; ++i) arr5[i] = i + 10;
// print(arr5);
// let b = arr5.pop();
// // What values do b and c have?
// print(`b=${b}`);
// let c = arr5.shift();
// print(`c=${c}`);
// print(arr5);
// arr5.push(21);
// print(arr5);
// arr5.unshift(22);
// print(arr5);


// Behavior of const on arrays:
// const a=[10,20,30];
// print(a);
// a.push(40);
// print(a);
// // Error when I try a=[10,20];


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

// // HOMEWORK
// // Print multiples of 7 up to 100
// // Print colors in colors[] like this: "I like color1, color2, ... colorLast-1 and colorLast."
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

// // When to use do..while.. or while..
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

// // Nested loops
// for (let x=0; x<10; ++x) {
//   let s=`x=${x}: `;
//   for (let y=0; y<10; ++y) {
//     if (x*y<10) s+=" ";
//     s+=`${x*y} `;
//   }
//   print(s);
// }

// // Breaking out of a loop
// for (let i=0; i<1_000_000; ++i) {
//   print(i);
//   if (i > 5) {
//     break;
//   }
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
// ----------------------------------------------------------------------------

// More Control flow

// Ternary Operator (:?)

// print((2 > 1) ? "Yes" : "No");
// // Short for
// if (2 > 1) {
//   print("Yes");
// } else {
//   print("No");
// }

// switch case
// break
// continue
// Comma Operator
// Common use for , is
// for (let i = 0, j = 1; i < board.length; i++, j++) {}

// // Recursion
// function fibonacci(n) {
//   if (n===0) return 0;
//   if (n===1) return 1;
//   else return fibonacci(n-1)+fibonacci(n-2);
// }
// for (let i=0; i<10; ++i) print(fibonacci(i));

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

// Behavior of const on objects:
// const b={};
// print(JSON.stringify(b));
// b.flag=true;
// print(JSON.stringify(b));
// // Error when I try b={test: 1};

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

document.getElementById('buttons').style.display = 'inline';
let counter = 0;
const leftButton = document.getElementById('leftButton');
const middleButton = document.getElementById('middleButton');
const rightButton = document.getElementById('rightButton');
leftButton.innerText = '<<';
rightButton.innerText = '>>';
middleButton.innerText = counter;

leftButton.addEventListener('click', () => {
  counter = counter - 15;
  middleButton.innerText = counter;
});
rightButton.addEventListener('click', () => {
  counter = counter + 15;
  middleButton.innerText = counter;
});
middleButton.addEventListener('click', () => {
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
