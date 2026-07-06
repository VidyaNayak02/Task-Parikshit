# JavaScript Short Notes

## 1. Escape Characters

Escape characters are special character sequences that begin with a backslash (`\`). They are used to represent characters that cannot be typed directly inside a string.

### Common Escape Characters

| Escape Character | Meaning |
|------------------|---------|
| `\n` | New line |
| `\t` | Horizontal tab |
| `\"` | Double quote |
| `\'` | Single quote |
| `\\` | Backslash |

---

## 2. Three Ways to Input a String

Strings in JavaScript can be written in three ways:

### Double Quotes

```javascript
let name = "Vidya";
```

### Single Quotes

```javascript
let name = 'Vidya';
```

### Template Strings (Backticks)

```javascript
let name = `Vidya`;
```

Template strings allow variable interpolation using `${}` and support multi-line strings.

---

## 3. String Concatenation

String concatenation means joining two or more strings into a single string.

The `+` operator is used for concatenation.

### Example

```javascript
let firstName = "Vidya";
let lastName = "Nayak";

console.log(firstName + " " + lastName);
```

**Output**

```
Vidya Nayak
```

---

## 4. Type Coercion

Type coercion is the automatic conversion of one data type into another by JavaScript during an operation.

### Examples

```javascript
"5" + 2
```

**Output**

```
52
```

```javascript
"5" - 2
```

**Output**

```
3
```
```javascript
"5" *2
```

**Output**

```
10
```
```javascript
"5" /2
```

**Output**

```
2.5
```

```javascript
true + 1
```

**Output**

```
2
```

JavaScript automatically converts values when required to perform an operation.
## 5. Important note
Unlike c,java there is no data types called float, or character
only two data types numbers and strings
typeof()- is used to determine the datatype
typeof(2)-number
typeof(2.34)-number
typeof('Hello')-string
typeof('H')-string
typeof(true)-boolean