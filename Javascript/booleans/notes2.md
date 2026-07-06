# JavaScript Basics: Booleans, If Statements & Rock Paper Scissors

## Overview

This project contains beginner-friendly JavaScript programs that demonstrate the use of booleans, conditional statements, and a simple Rock Paper Scissors game.

---

# 1. Booleans

A **Boolean** is a data type that can have only two values:

* `true`
* `false`

Booleans are commonly used to make decisions in programs.

### Example

```javascript
console.log(3 < 5);   // true
console.log(10 > 56); // false
```

### Comparison Operators

| Operator | Meaning                  | Example    |
| -------- | ------------------------ | ---------- |
| `>`      | Greater than             | `10 > 5`   |
| `<`      | Less than                | `5 < 10`   |
| `>=`     | Greater than or equal to | `18 >= 18` |
| `<=`     | Less than or equal to    | `7 <= 9`   |
| `===`    | Strictly equal           | `5 === 5`  |
| `!==`    | Not equal                | `5 !== 6`  |

---

# 2. If Statement

The `if` statement executes a block of code only if the specified condition is true.

### Syntax

```javascript
if (condition) {
    // Code executes if condition is true
} else {
    // Code executes if condition is false
}
```

### Example

```javascript
let age = 28;

if (age >= 18 && age < 60) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}
```

### Logical Operators

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

Example:

```javascript
let isStudent = true;
let hasID = true;

if (isStudent && hasID) {
    console.log("Entry allowed");
}
```

---

