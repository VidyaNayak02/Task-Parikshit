# JavaScript Numbers & Math

## Number Data Type

JavaScript has a single numeric data type called **Number**.

```javascript
let age = 19;
let price = 99.99;

console.log(typeof age);   // number
console.log(typeof price); // number
```

Unlike Java or C, JavaScript does not have separate `int`, `float`, or `double`.

---

# Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3 = 8` |
| `-` | Subtraction | `5 - 3 = 2` |
| `*` | Multiplication | `5 * 3 = 15` |
| `/` | Division | `6 / 2 = 3` |
| `%` | Modulus (Remainder) | `7 % 2 = 1` |
| `**` | Exponent (Power) | `2 ** 3 = 8` |

Example:

```javascript
let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

---

# Increment & Decrement

```javascript
let x = 10;

x++;
console.log(x); //11

x--;
console.log(x); //10
```

---

# Math Object

The `Math` object provides useful mathematical functions.

## Math.round()

Rounds to the nearest integer.

```javascript
Math.round(4.6); //5
Math.round(4.2); //4
```

---

## Math.floor()

Rounds down.

```javascript
Math.floor(4.9); //4
```

---

## Math.ceil()

Rounds up.

```javascript
Math.ceil(4.1); //5
```

---

## Math.trunc()

Removes the decimal part.

```javascript
Math.trunc(7.89); //7
```

---

## Math.abs()

Returns the absolute value.

```javascript
Math.abs(-15); //15
```

---

## Math.sqrt()

Square root.

```javascript
Math.sqrt(64); //8
```

---

## Math.pow()

Raises a number to a power.

```javascript
Math.pow(2,5); //32
```

---

## Math.max()

Returns the largest value.

```javascript
Math.max(5,9,12,7); //12
```

---

## Math.min()

Returns the smallest value.

```javascript
Math.min(5,9,12,7); //5
```

---

## Math.random()

Returns a random number between **0** and **1**.

```javascript
Math.random();
```

Example Output:

```
0.726351
```

Random integer between **1 and 10**

```javascript
let random = Math.floor(Math.random() * 10) + 1;

console.log(random);
```

---

# Infinity

Dividing by zero returns Infinity.

```javascript
console.log(10 / 0);
```

Output

```
Infinity
```

---

# NaN (Not a Number)

Occurs when a mathematical operation is invalid.

```javascript
console.log("Hello" * 5);
```

Output

```
NaN
```

Check using:

```javascript
isNaN("Hello"); //true
isNaN(50);      //false
```

---

# Number Conversion

## Number()

Converts a value to a number.

```javascript
Number("100");
```

Output

```
100
```

---

## parseInt()

Extracts an integer.

```javascript
parseInt("100px");
```

Output

```
100
```

---

## parseFloat()

Extracts a decimal number.

```javascript
parseFloat("99.99");
```

Output

```
99.99
```

---

# toFixed()

Limits decimal places.

```javascript
let pi = 3.141592;

console.log(pi.toFixed(2));
```

Output

```
3.14
```

> **Note:** `toFixed()` returns a **string**.

---

# Number.isInteger()

Checks if a value is an integer.

```javascript
Number.isInteger(10);   //true
Number.isInteger(10.5); //false
```

---

# BigInt

Used for extremely large integers.

```javascript
let big = 123456789012345678901234567890n;

console.log(typeof big);
```

Output

```
bigint
```

---

# Safe Integer Limits

```javascript
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
```

Output

```
9007199254740991
-9007199254740991
```

---

# Common Interview Programs

## Even or Odd

```javascript
let num = 8;

if (num % 2 === 0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}
```

---

## Largest of Two Numbers

```javascript
let a = 20;
let b = 15;

console.log(a > b ? a : b);
```

---

## Swap Two Numbers

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);
```

---

## Generate a 6-digit OTP

```javascript
let otp = Math.floor(100000 + Math.random() * 900000);

console.log(otp);
```

---

# Interview Questions

### 1. Does JavaScript have `int` and `float`?

No. JavaScript has a single numeric type called **Number**.

---

### 2. What is `NaN`?

A special value meaning **Not a Number**, produced by invalid mathematical operations.

---

### 3. Difference between `Number()` and `parseInt()`?

- `Number("10px")` → `NaN`
- `parseInt("10px")` → `10`

---

### 4. Difference between `Math.floor()` and `Math.trunc()`?

- `Math.floor(-4.2)` → `-5`
- `Math.trunc(-4.2)` → `-4`

---

### 5. What is `BigInt`?

A numeric type used for integers larger than `Number.MAX_SAFE_INTEGER`.

---

# Summary

- JavaScript uses one numeric type: **Number**
- Use `Math` methods for calculations
- `Math.random()` generates random values
- `NaN` represents invalid numeric results
- `BigInt` stores very large integers
- `parseInt()`, `parseFloat()`, and `Number()` convert strings into numbers
- `toFixed()` formats decimal places
- `Number.isInteger()` checks for integer values