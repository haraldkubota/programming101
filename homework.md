# Types

* What types exist in JavaScript?
* How do you find out if a variable a is a string?
* What is the type of thisVariableDoesNotExist ?
* What is the type of undefined ?
* What is the type of 'undefined' ?
* What is the type of 1/0 ?
* What is the type of NaN?
* What is the value and type of 10_000? And of 10_000n?

# Variables

* What's the relationship between the variables MYVAR, MyVar, myVar, myvar, my_var and my.var?
* What's the value of a variable declared with var before a value is assigned?
* Understand the difference of var, let and const. What's their scope?
* What decimal value is this binary 0001000100010001?

## Operators

* Have a variable a and set it to 2. Add it to itself. Double it again. What value is it?
* How to calculate the square root of 2? Or sin(0.1)?
* Rewrite with the shorter assignment operators (where possible):
  * a = a + b
  * a = c * a
  * a = a / 2
  * a = 1 / a
  * a = a - 1
  * a = 2 - a
* What does this output? And how does it work? let a = 255; a &= 0x0F; print(a)
* Let a have a number from 10 to 99. How do you get its right digit?

# Strings

* You have 2 string variables a and b, and a number n.
You would like create a new variable which contains first string variable, a space, the number, a colon and the 2nd string variable. How do you do that? Do it once with and once without string interpolation.
* Take the string " This is a very long test string which has plenty characters to play with "
  * Remove the leading and training space
  * Replace the first "a" with "one"
  * Take the slice from character 40 to 59 (inclusive 59)
  * Replace all "r" with "R"
  * Take the last 3 characters
  * Add up their character codes
  * The number should be 299

## Regular expression
* [Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) shows character classes which you can use in regular expressions.
* How would the simplest character class look like for:
  * any character
  * an 'a'
  * an 'a' or an 'x'
  * not an 'a' and not an 'x'
  * an 'a' or 'b' or 'c' or 'd' or 'e'
  * a upper case character
  * a letter
  * a digit
  * a "spacey character" (space, new line, tab)
  * a not-spacey character
  * the end of line
  * a NUL character (ASCII 0)
  * a word with 4 letters (the character class gets a {4} in this case extra)

# Comparisons and if...else... and logical operators

* Have a number in the variable a and print "${a} is even" when a is even and "${a} is odd" when it's odd
* Have a number in the variable a and print "Fizz" when the number is divisible by 3, "Buzz" if it's divisible by 5, and the number itself in all other cases. See [Fizz_buzz](https://en.wikipedia.org/wiki/Fizz_buzz)
* Compare these values. Can you explain why it shows true or false? See [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
  * 0 == ""
  * [] == false
  * repeat the same with === instead of ==
* What is
  * 1 < 2
  * 2 <= 1
  * 3 !== 3
  * 3 !== 3n
  * ! 3 === 3n
  * !(3 === 3n)
* You have 2 variables a and b. If they are equal, print out "a and b are all the same!"
* You have 2 variables a and b. If they are different, print out "a and b are all different!"
* You have 3 variables a, b and c. If they are all equal, print out "They are all the same!"
* You have 3 variables a, b and c. If they are all different, print out "They are all unique!"

# Functions

* Create a function evenOrOdd() with a argument. If it's even, return "even". If it's odd, return "odd".
* Create a function add() to add up 2 numbers which are supplied as arguments. 
  * test: add(4,5) return 9, add(-5,-7) returns -12
  * What does add(3, "x") return?
* Now adjust the function: if any of those argument is not a number type, return NaN
  * test: add(4,5) return 9, add(-5,-7) returns -12
  * What does add(3, "x") return?
* Create a function mul() to multiply 2 arguments. No need to check for argument types.
* Create a mulAndAdd function with 3 arguments: multiply the first 2 via mul() and add the 3rd value via  add().
  * test: mulAndAdd(2,3,5) returns 15
  * What does mulAndAdd("x", 4, 7) return? Or mulAndAdd(3, 5, "x")?
* Create a function which does the FixxBuzz game: it returns "Fizz" , or "Buzz" or "FizzBuzz" or the number as a string. Rules see above.
* Create above function via the () => {} syntax

# Arrays/Lists

* Create an array a with values 10, 12, 14, 16
* What is the length of a?
* Append 18 to it. What is the return value you get?
* What is the length of a now?
* How do you get the value of the last item in the list?
* What is the length of a now?
* How do you get the value of the first item in the list?
* What is the length of a now?
* Insert a number at the front of the list.
* What is the length of a now?
* How do you move the last item to the front?
* How do you move the first item to the end?




