# JavaScript Functions

## What is a Function?
A **function** is a reusable block of code that performs a specific task. It helps avoid writing the same code multiple times.

---

## Syntax

```javascript
function functionName() {
  // code
}
```

### Example

```javascript
function greet() {
  console.log("Hello");
}

greet();
```

**Output**

```
Hello
```

---

## Why Use Functions?

- Reuse code.
- Reduce repetition.
- Improve readability.
- Make debugging easier.
- Organize programs into smaller parts.

---

## Calling a Function

A function executes only when it is **called (invoked)**.

```javascript
function greet() {
  console.log("Welcome");
}

greet();
greet();
```

**Output**

```
Welcome
Welcome
```

---

## Function with Parameters

Parameters allow values to be passed into a function.

```javascript
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Vidya");
```

**Output**

```
Hello Vidya
```

---

## Function with Return Value

The `return` statement sends a value back to where the function was called.

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum);
```

**Output**

```
8
```

---

## Example: Rock Paper Scissors

```javascript
function game() {
  const random = Math.random();

  if (random < 1 / 3) {
    return "Rock";
  } else if (random < 2 / 3) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

let move = game();
console.log(move);
```

---

## `console.log()` vs `return`

| `console.log()` | `return` |
|-----------------|----------|
| Displays output on the console. | Sends a value back to the caller. |
| Used for debugging. | Used to use the returned value elsewhere. |
| Does not return data. | Ends the function after returning a value. |

---

## Benefits of Functions

- Code reusability.
- Less repetition.
- Cleaner programs.
- Easier maintenance.
- Better readability.
- Easier testing and debugging.

---

## Parameter vs Argument

```javascript
function greet(name) { }   // Parameter

greet("Vidya");            // Argument
```

| Parameter | Argument |
|-----------|----------|
| Variable declared in the function definition. | Actual value passed when calling the function. |

---

## Interview Questions

### 1. What is a function?
A reusable block of code that performs a specific task.

### 2. Why do we use functions?
To avoid code duplication, improve readability, and make programs easier to maintain.

### 3. What is the difference between a parameter and an argument?
- **Parameter:** Variable in the function definition.
- **Argument:** Actual value passed to the function.

### 4. What is the purpose of `return`?
It sends a value back to the caller and ends the function.

### 5. Can a function return multiple values?
No. A function returns only one value, but it can return an array or object containing multiple values.

---

## Key Points

- A function is declared using the `function` keyword.
- A function runs only when it is called.
- Parameters receive values from arguments.
- `return` sends a value back to the caller.
- Functions reduce code duplication.
- Functions make code modular and easier to maintain.
- Use meaningful function names such as `calculateTotal()`, `playGame()`, or `getRandomMove()`.

---

## Summary

- **Function:** Reusable block of code.
- **Call:** Executes the function.
- **Parameter:** Variable in function definition.
- **Argument:** Value passed to the function.
- **Return:** Sends a value back to the caller.
- **Main Benefit:** Write once, use many times.