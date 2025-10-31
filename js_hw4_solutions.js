
console.log("=== Exercise 1: Formatting and Naming ===");
const thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  // code block
}
console.log("Variable formatted correctly:", thisIsANewVariable);

// Exercise 2: Defining Core Data Types
console.log("\n=== Exercise 2: Defining Core Data Types ===");
const templateString = `This is a template string`;
const floatNumber = 3.14;
const booleanValue = true;
console.log("String:", templateString);
console.log("Float:", floatNumber);
console.log("Boolean:", booleanValue);

// Exercise 3: Single-Line Comments
console.log("\n=== Exercise 3: Single-Line Comments ===");
// This variable stores the player's current score in the game
let currentScore = 95;
console.log("Current score:", currentScore);

// Exercise 4: Equality Comparison
console.log("\n=== Exercise 4: Equality Comparison ===");
console.log("Value equality (==):", '100' == 100);
console.log("Strict equality (===):", '100' === 100);

// SECTION 2: Conditionals and Control Flow
// ==========================================

// Exercise 5: Ternary Operator
console.log("\n=== Exercise 5: Ternary Operator ===");
const isWeekend = false;
const schedule = isWeekend ? "Day off" : "Work day";
console.log("Schedule:", schedule);

// Exercise 6: If/Else Structure
console.log("\n=== Exercise 6: If/Else Structure ===");
const userAge = 16;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// Exercise 7: Logical AND Operator
console.log("\n=== Exercise 7: Logical AND Operator ===");
const hasPermission = true;
const itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Ready to process");
}

// Exercise 8: For Loop
console.log("\n=== Exercise 8: For Loop ===");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// Exercise 9: Loop Control
console.log("\n=== Exercise 9: Loop Control ===");
for (let i = 0; i <= 9; i++) {
  if (i === 7) {
    break;
  }
  console.log("Loop iteration:", i);
}

// Exercise 10: Ensuring Execution
console.log("\n=== Exercise 10: Ensuring Execution ===");
let counter = 10;
do {
  console.log("Running once");
} while (counter < 10);

// SECTION 3: Functions and Data Structures
// ==========================================

// Exercise 11: Function Definition
console.log("\n=== Exercise 11: Function Definition ===");
function calculateArea(width, height) {
  return width * height;
}
const resultArea = calculateArea(5, 10);
console.log("Result Area:", resultArea);

// Exercise 12: Array Manipulation
console.log("\n=== Exercise 12: Array Manipulation ===");
const fruitList = ['Apple', 'Banana'];
console.log("Initial array:", fruitList);
fruitList.push('Grape');
console.log("After push:", fruitList);
fruitList.shift();
console.log("After shift:", fruitList);
console.log("Index of 'Banana':", fruitList.indexOf('Banana'));

// Exercise 13: Array Copying
console.log("\n=== Exercise 13: Array Copying ===");
const originalData = [1, 2, 3, 4, 5];
const clonedData = originalData.slice();
console.log("Original data:", originalData);
console.log("Cloned data:", clonedData);
console.log("\nNote: The slice() method performs a SHALLOW COPY.");
console.log("This means:");
console.log("- Primitive values (numbers, strings, booleans) are copied by value");
console.log("- Objects and arrays inside are copied by reference");
console.log("- If originalData contains nested objects/arrays, changes to those");
console.log("  nested structures will affect both the original and the clone");

// Exercise 14: Object Constructor
console.log("\n=== Exercise 14: Object Constructor ===");
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}
Animal.prototype.speak = function () {
  console.log(this.sound);
};
console.log("Animal constructor created");

// Exercise 15: Object Instantiation
console.log("\n=== Exercise 15: Object Instantiation ===");
const dog = new Animal("Canine", "Woof");
const cat = new Animal("Feline", "Meow");
const animalArray = [dog, cat];
console.log("Dog:", dog);
console.log("Cat:", cat);
console.log("Animal Array:", animalArray);
dog.speak();
cat.speak();

console.log("\n=== All Exercises Complete! ===");
