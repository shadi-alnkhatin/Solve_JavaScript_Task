"use strict"
// LOOPS
// Task 1: Print even numbers from 1 to 50 twice, using a for loop and a while loop
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

let i = 2;
while (i <= 50) {
  console.log(i);
  i += 2;
}

// Task 2: Print even numbers from 1 to 50 twice using a single for loop
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

// Task 3: One loop prints even numbers, the other prints odd numbers
for (let i = 2; i <= 50; i += 2) {
  console.log(i);  // Even numbers
}
for (let i = 1; i <= 50; i += 2) {
  console.log(i);  // Odd numbers
}

// Task 4: Fizz-Buzz Solution
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Task 5: Fizz-Buzz with a function
function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log('FizzBuzz');
  } else if (n % 3 === 0) {
    console.log('Fizz');
  } else if (n % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(n);
  }
}

for (let i = 1; i <= 100; i++) {
  fizzBuzz(i);
}

// Task 6: Recursive Fizz-Buzz
function recursiveFizzBuzz(n) {
  if (n > 100) return;
  if (n % 3 === 0 && n % 5 === 0) {
    console.log('FizzBuzz');
  } else if (n % 3 === 0) {
    console.log('Fizz');
  } else if (n % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(n);
  }
  recursiveFizzBuzz(n + 1);
}

recursiveFizzBuzz(1);

// Task 7: Convert a number into banknotes
function convertToBanknotes(amount, notes) {
  let result = [];
  for (let note of notes) {
    while (amount >= note) {
      amount -= note;
      result.push(note);
    }
  }
  console.log(result.join(', '));
}

convertToBanknotes(57, [25, 10, 5, 1]);

// Task 8: Count occurrences of a character, ignoring case
function countCharacter(str, char) {
  let count = 0;
  let lowerStr = str.toLowerCase();
  let lowerChar = char.toLowerCase();
  
  for (let c of lowerStr) {
    if (c === lowerChar) count++;
  }

  console.log(count);
}

countCharacter('Coding Academy by Orange', 'o');

// Task 9a: Print numbers 0 - 20
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// Task 9b: Print odd values from 3 - 29
for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

// Task 9c: Print even numbers from 12 to -14
for (let i = 12; i >= -14; i -= 2) {
  console.log(i);
}

// Task 9d: Print multiples of 3 from 50 to 20
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) console.log(i);
}

// Task 10e: Print each element of the array
let str = 'CodingAcademy';
let arr = [7, 500, 'KH404', 'black', 36];
for (let elem of arr) {
  console.log(elem);
}

// Task 10f: Print string characters in reverse order
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

// Task 11: Sort numbers into even and odd arrays
let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evens.push(num);
  } else {
    odds.push(num);
  }
}

console.log('Evens:', evens);
console.log('Odds:', odds);

// Task 12: Create meals using elements from arrays
let proteins = ['chicken', 'noodles', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function generateMeals(mealCount) {
  let meals = new Set();

  while (meals.size < mealCount) {
    let meal = [
      proteins[Math.floor(Math.random() * proteins.length)],
      grains[Math.floor(Math.random() * grains.length)],
      vegetables[Math.floor(Math.random() * vegetables.length)],
      beverages[Math.floor(Math.random() * beverages.length)],
      desserts[Math.floor(Math.random() * desserts.length)]
    ].join(', ');

    meals.add(meal);
  }

  console.log(Array.from(meals).join('\n'));
}

generateMeals(5);
