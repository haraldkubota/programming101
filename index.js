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

// Why ++ and -- ?
// PDP-11 (1970) had this in its instruction set at CPU level
// Removes the need for a separate v=v+1 resp v=v-1 instructions

// More mathematical operations are possible via the Math global object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// ----------------------------------------------------------------------------

// Assignment operators

// +=, -=, *=, /=, %=, &=, |= etc.
// Short for v=v+x, v=v-x etc.

// let n = 20;
// let n4 = 10;
// print(`n4=${n4}`);
// n4 += n;
// print(`n4=${n4}`);

// Bit operations with & and |
// let n1 = 0x1234;
// let n2 = 255;  // = 0x00ff
// n1 &= n2;  // same as: n1 = n1 & n2;
// print(`After &= assignment: n1=${n1} (=0x${n1.toString(16)})`);
// n1 = 0x1234;
// n1 |= n2;
// print(`After |= assignment: n1=${n1} (=0x${n1.toString(16)})`);

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

// Flow Control

// ----------------------------------------------------------------------------

// Comparison operators, and if...else...
// ===, !==, <, >, <=, >=, !, && and ||

// let N = 123.456;
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
// // Create a function which gets a number as an argument and it returns it as a string, except
// // when it's 0, then return the string "zero"

// function stringANumber(n) {
//   if (n==0) {
//     return "zero";
//   } else {
//     return n.toString(); // or: ""+n
//   }
// }

// print(stringANumber(""));

// ----------------------------------------------------------------------------
//
// One simple data structure needed a lot
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

// Where are the objects?
// Primitives (number, string, boolean) are on the stack
// Objects (functions, objects) are on the heap
// See https://felixgerschau.com/javascript-memory-management/

// let arr4 = Array(10);
// print(arr4);
// arr4.push(1);
// print(arr4);
// arr4[1] = 2;
// print(arr4);
// arr4.fill(3);
// print(arr4);
// // let arr5=arr4.map((v,i) => i+10);
// // // Same as:
// let arr5 = [];
// for (let i = 0; i < arr4.length; ++i) arr5[i] = i + 10;
// print(arr5);
// let b = arr5.pop();
// // What values do b and c have?
// print(`b=${b}`);
// print(arr5);
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

// for (INITIALIZE; CONDITION; CHANGE_LOOP_VARIABLE) {}
//
// for (let i=0; i<10; i=i+1) {
//   print(i);
// }
// Same, but not idiomatic JavaScript:
// for (let i=0; i<=9; i=i+1) {
//   print(i);
// }
// Similar, but not idiomatic JavaScript either:
// for (let i=1; i<=10; i=i+1) {
//   print(i);
// }

// print(`anArray = [${anArray}]`);
// for (let i=0; i<anArray.length; ++i) {
//   print(`for loop: i=${i}, anArray[${i}]=${anArray[i]}`);
// }

// // Examples
// // Print multiples of 7 up to 100
// for (let i=7; i<100; i+=7) {
//   print(i);
// }
// // Task
// // Print colors in colors[] like this: "I like color1, color2, ... colorLast-1 and colorLast."
// // Hint: construct a string, add colors, commas, and for the last color, add "and" and a period.

// print(colors);
// let s="";
// for (let i=0; i < colors.length; ++i) {
//   if (i != colors.length-1) {
//     s += `${colors[i]}, `;
//   } else {
//     s += `and ${colors[i]}.`;
//   }
// }
// print(s);

// // for(;;) can always be written as a while loop:
// let i=10;
// while (i < anArray.length) {
//   print(`while: i=${i}, anArray[${i}]=${anArray[i]}`);
//   ++i;
// }

// // do..while() loops execute the loop at least once.
// let i=10;
// do {
//   print(`do..while: i=${i}, anArray[${i}]=${anArray[i]}`);
//   ++i;
// } while (i < anArray.length);

// When to use do..while.. or while..
// do {
//   print("Enter a number from 1 to 10");
//   number = getANumber();
// } while (number >= 1 && number <=10);

// // for...in... vs for...of...

// print(colors);
// for (let index in colors) {
//   print(`index=${index}`);
// }
// for (let color of colors) {
//   print(`color=${color}`);
// }

// // You can both index and value!
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// print(Object.entries(colors));

// for (let [index, color] of Object.entries(colors)) {
//   print(`index=${index}, color=${color}`);
// }

// // Nested loops: outer loop (x) and inner loop (y)
// for (let x=0; x<10; ++x) {
//   let s=`x=${x}: `;
//   for (let y=0; y<10; ++y) {
//     if (x*y<10) s+=" ";
//     s+=`${x*y} `;
//   }
//   print(s);
// }

// // Breaking out of a loop
// for (let i=0, sum=0; i<100; ++i) {
//   print(`Start of the loop body: i=${i}, sum=${sum}`);
//   sum += i;
//   if (sum > 20) {
//     break;
//   }
//   print(`End of the loop body: i=${i}, sum=${sum}`);  // What is the output if I use print(i) here?
// }
// print("Finished the loop");
// print(`After the loop: i=${i}, sum=${sum}`);  // What will i and sum be here?

// // Continuing a loop (skip to its end)
// for (let i=0; i<10; ++i) {
//   // print(i);  // What is the output if I use print(i) here?
//   if (i>4) {
//     print('Moving on...');
//     continue;
//   }
//   print(i);
// }
// print("Finished the loop");

// // forEach method
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// print(anArray);

// function display(v) {
//   print(`v=${v}`);
// }

// anArray.forEach(display);

// // forEach() often uses very short functions which are not needed again
// // Anonymous function:
// print(anArray);
// anArray.forEach((v) => {
//   print(`v=${v}`);
// });
// Note that forEach() does not modify the original array. It also returns undefined.

// ----------------------------------------------------------------------------

// More Control flow

// ----------------------------------------------------------------------------

// The (only) Ternary Operator (:?)
// Ternary = 3 arguments
// Unary: a++
// Binary: a+b
// Ternary a ? b : c

// let a = (2 > 1) ? "Yes" : "No";
// print(a);

// // Short for
// let a;
// if (2 > 1) {
//   a = "Yes";
// } else {
//   a = "No";
// }
// print(a);

// switch case

// let a=1;
// switch(a) {
//   case 1: print("Uno");
//           // break;
//   case 2: print("Due");
//           // break;
//   case 3: print("Tres");
//           // break;
//   default: print("Unknown number");
// }

// Comma Operator
// Common use for , is
// for (let i = 0, j = 1; i < board.length; i++, j++) {}

// // Recursion

// // Function calling itself
// // To avoind infinite loops, there MUST be a condition (base case) when to NOT call itself again
//
// // https://en.wikipedia.org/wiki/Fibonacci_number
// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   else return fibonacci(n - 1) + fibonacci(n - 2);
// }
// for (let i = 0; i < 10; ++i) print(fibonacci(i));

// // Question: What happens if you call fibonacci() with an argument below 0?

// ----------------------------------------------------------------------------

// Objects, properties, methods and JSON.stringify()

// JSON: JavaScript Object Notation
// Simply a String representation of a JavaScript Object:
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
//   sound: () => {
//     return 'voom voom';
//   },
// };

// Printing an object does not work well:
// print(car);

// JSON.stringify(): takes an object and makes it a string (with optional formatting)

// print(JSON.stringify(car));
// print(JSON.stringify(car, null, '  '));

// Opposite of JSON.stringify(): JSON.parse() takes a string and returns an object

// let carString = JSON.stringify(car);
// // let carString = JSON.stringify(car, null, '  ');
// print(carString);
// let newCar = JSON.parse(carString);
// print(JSON.stringify(newCar));
// // print(JSON.stringify(newCar, null, '  '));

// Accessing properties

// print(car.color);
// print(car.buildYear);
// print(car.brand);
// if (car.wheels.length === 4)
//   print("It's a car with the normal amount of wheels");
// else print("It's a car with an unusual amount of wheels");

// // // Adding a new property:
// car.isHybrid = true;

// print(JSON.stringify(car, null, '  '));

// Accessing methods (functions) of an object:

// print(car.sound);
// print(car.sound());

// // Behavior of const on objects (same as arrays, because objects and arrays are both on the heap)

// const b={};
// print(JSON.stringify(b));
// b.flag=true;
// print(JSON.stringify(b));
// // Error when I try:
// b={test: 1};

// Objects are on the Heap:

// const b = { color: 'red', age: 20 };
// print(JSON.stringify(b));
// const c = b;
// print(`b = ${JSON.stringify(b)}`);
// print(`c = ${JSON.stringify(c)}`);
// b.size = 9;
// print(`b = ${JSON.stringify(b)}`);
// print(`c = ${JSON.stringify(c)}`);

// let d = [1, 2, 3, 4, 5];
// let e = [d, d, d, d];
// print(JSON.stringify(e));

// // Attemt to change the 2 into 12 for the first item
// e[0][1] = 12;
// print(JSON.stringify(e));

// e = [];
// for (let i = 0; i < 4; ++i) {
//   let row = new Array(5);
//   row.fill(1);
//   e.push(row);
// }
// print(`e = ${JSON.stringify(e)}`);
// e[0][1] = 12;
// print(`e = ${JSON.stringify(e)}`);

// e = [];
// e.push([1,2,3]);
// e.push([1,2,3]);
// e[0][1] = 9;
// print(`e = ${JSON.stringify(e)}`);


// // Task: Create a JSON structure with 5 city hall addresses (as an array)
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

// document.getElementById('buttons').style.display = 'inline';
// let counter = 0;
// const leftButton = document.getElementById('leftButton');
// const middleButton = document.getElementById('middleButton');
// const rightButton = document.getElementById('rightButton');
// leftButton.innerText = '<<';
// rightButton.innerText = '>>';
// middleButton.innerText = counter;

// leftButton.addEventListener('click', () => {
//   counter = counter - 15;
//   middleButton.innerText = counter;
// });
// rightButton.addEventListener('click', () => {
//   counter = counter + 15;
//   middleButton.innerText = counter;
// });
// middleButton.addEventListener('click', () => {
//   middleButton.style.backgroundColor =
//     colors[Math.floor(Math.random() * colors.length)];
//   middleButton.style.transform = `rotate(${counter}deg)`;
//   print(counter);
// });

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

// ----------------------------------------------------------------------------
// DSA, but this better be not in a web page
// ----------------------------------------------------------------------------

// function benchmark(f, n) {
//   let startTime = performance.now();
//   for (let i = 0; i < n; ++i) {
//     f();
//   }
//   let endTime = performance.now();
//   print(`Elapsed time for ${n} iterations: ${endTime - startTime}ms`);
// }

// function arrayIndexOf(arr, value) {
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] === value) return i;
//   }
//   return -1;
// }

// let a = new Array(10000).fill(0);
// a[9999] = 10;

// benchmark(()=>{let t=1;}, 10_000_000);
// benchmark(() => {
//   arrayIndexOf(a, 10);
// }, 100_000);

// function collatz(n) {
//   let count=0;
//   while (n > 1) {
//     if (n % 2 === 0) n /= 2;
//     else n = 3 * n + 1;
//     ++count;
//   }
//   return count;
// }

// print(collatz(97));
// print(collatz(295));
// print(collatz(259));
