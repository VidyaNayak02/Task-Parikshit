# JavaScript Basics

## JavaScript Comments

Comments are used to explain code or temporarily disable code during testing. They are ignored by the JavaScript interpreter.

### Single-line Comment

```javascript
// This is a single-line comment
console.log("Hello");
```

### Multi-line Comment

```javascript
/*
This is a
multi-line comment
*/
console.log("Hello");
```

---

# Script Tag

The `<script>` tag is used to include JavaScript in an HTML document.

### Internal JavaScript

```html
<script>
    console.log("Hello World");
</script>
```

### External JavaScript

```html
<script src="script.js"></script>
```

**Note:** It is recommended to place the `<script>` tag just before the closing `</body>` tag.

---

# alert()

The `alert()` function displays a popup message in the browser.

### Syntax

```javascript
alert("Message");
```

### Example

```javascript
alert("Welcome to JavaScript!");
```

**Output**

A popup box displaying:

```text
Welcome to JavaScript!
```

---

# console.log()

The `console.log()` function prints output to the browser's Developer Console. It is mainly used for testing and debugging.

### Syntax

```javascript
console.log(value);
```

### Example

```javascript
console.log("Hello World");
```

**Output**

```text
Hello World
```

### Example

```javascript
let name = "Vidya";

console.log(name);
```

**Output**

```text
Vidya
```

---

# Summary

- `//` is used for single-line comments.
- `/* */` is used for multi-line comments.
- The `<script>` tag is used to add JavaScript to an HTML page.
- `alert()` displays a popup message.
- `console.log()` prints output in the browser's Developer Console.
```