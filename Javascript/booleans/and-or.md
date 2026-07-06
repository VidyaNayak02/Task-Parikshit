# Short-Circuit Evaluation in JavaScript

## Short-Circuit Evaluation

Short-circuit evaluation means JavaScript stops evaluating an expression as soon as the final result is known.

---

## AND (`&&`) Operator

* Returns the **first falsy value** it encounters.
* If all values are truthy, it returns the **last value**.

### Examples

```javascript
console.log(true && true);        // true
console.log(true && false);       // false
console.log(5 && 10);             // 10
console.log(0 && "Hello");        // 0
console.log("Hi" && 100);         // 100
```

---

## OR (`||`) Operator

* Returns the **first truthy value** it encounters.
* If all values are falsy, it returns the **last value**.

### Examples

```javascript
console.log(true || false);       // true
console.log(false || true);       // true
console.log(0 || "Hello");        // "Hello"
console.log("" || "JavaScript");  // "JavaScript"
console.log(null || undefined);   // undefined
```

---

## Falsy Values

The following values are considered **falsy**:

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN`

Everything else is **truthy**.

---

## Common Use

Provide a default value using `||`:

```javascript
let username = "";
let name = username || "Guest";

console.log(name); // Guest
```

Execute code only when a condition is true using `&&`:

```javascript
let isLoggedIn = true;

isLoggedIn && console.log("Welcome!");
```
