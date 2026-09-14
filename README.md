# Grade Evaluator Program

A simple JavaScript program that calculates a learner's average score and determines whether the learner **Passed** or **Failed** based on a passing score of 75.

## Features

* Stores the learner's name
* Stores three scores
* Calculates the average of the three scores
* Rounds the average to two decimal places
* Determines the result based on the average
* Displays the learner's name, average, and result

## Technologies Used

* JavaScript
* Node.js

## How It Works

The program takes three scores and calculates their average:

```text
Average = (Score 1 + Score 2 + Score 3) / 3
```

The learner is considered:

* **Passed** — average is 75 or higher
* **Failed** — average is below 75

## Example

For the following scores:

```text
Score 1: 90
Score 2: 85
Score 3: 88
```

The program calculates:

```text
Average: 87.67
Result: Passed
```

### Console Output

```text
Ana Santos has an average of 87.67 and Passed.
```

## Concepts Practiced

This project helped me practice:

* Variables using `const`
* Functions
* Function parameters
* `return` statements
* Arithmetic operators
* Conditional statements (`if/else`)
* Comparison operators
* `.toFixed()`
* `console.log()`

## How to Run

Make sure Node.js is installed, then open the project folder in VS Code and run:

```bash
node gradeEvaluator.js
```

Replace `gradeEvaluator.js` with the actual name of your JavaScript file if it is different.
