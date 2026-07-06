# 📘 Local Storage in JavaScript

## What is Local Storage?

- **Local Storage** is a web storage feature that allows websites to store data in the user's browser.
- The stored data **remains even after the browser is closed or the computer is restarted**.
- Data is stored as **key-value pairs**.
- Both the **key and value are stored as strings**.

---

# Features of Local Storage

- Stores data permanently until it is deleted.
- Data is stored in the user's browser.
- Data is **not sent to the server** with every request.
- Can store up to **5–10 MB** (depends on the browser).
- Accessible only by the same website (same origin).

---

# Why Use Local Storage?

- Save user preferences (e.g., dark mode).
- Save game scores.
- Remember login settings.
- Store shopping cart items.
- Save application data without a database.

---

# Local Storage Methods

## 1. `localStorage.setItem()`

Stores data in local storage.

### Syntax

```javascript
localStorage.setItem(key, value);
```

### Example

```javascript
localStorage.setItem("name", "Vidya");
```

---

## 2. `localStorage.getItem()`

Retrieves data from local storage.

### Syntax

```javascript
localStorage.getItem(key);
```

### Example

```javascript
const name = localStorage.getItem("name");

console.log(name);
```

Output

```text
Vidya
```

---

## 3. `localStorage.removeItem()`

Removes a specific item.

### Syntax

```javascript
localStorage.removeItem(key);
```

### Example

```javascript
localStorage.removeItem("name");
```

---

## 4. `localStorage.clear()`

Removes all stored data.

### Syntax

```javascript
localStorage.clear();
```

---

# Storing Objects in Local Storage

Local Storage stores **only strings**.

Therefore, objects must first be converted into JSON.

## Store an Object

```javascript
const score = {
  wins: 10,
  losses: 3,
  ties: 2
};

localStorage.setItem("score", JSON.stringify(score));
```

---

## Retrieve an Object

```javascript
const score = JSON.parse(localStorage.getItem("score"));

console.log(score.wins);
```

---

# Conversion Flow

```text
JavaScript Object
        │
        │ JSON.stringify()
        ▼
JSON String
        │
        │ localStorage.setItem()
        ▼
Browser Local Storage
        │
        │ localStorage.getItem()
        ▼
JSON String
        │
        │ JSON.parse()
        ▼
JavaScript Object
```

---

# Example: Save Game Score

```javascript
const score = {
  wins: 5,
  losses: 2,
  ties: 1
};

localStorage.setItem("score", JSON.stringify(score));

const savedScore = JSON.parse(localStorage.getItem("score"));

console.log(savedScore);
```

---

# Important Points

- Local Storage stores data as **key-value pairs**.
- Both **keys and values are stored as strings**.
- Data remains even after closing the browser.
- Use **`setItem()`** to save data.
- Use **`getItem()`** to retrieve data.
- Use **`removeItem()`** to delete one item.
- Use **`clear()`** to delete all stored data.
- Convert objects to JSON using **`JSON.stringify()`** before storing.
- Convert JSON strings back into objects using **`JSON.parse()`** after retrieving.

---

# Local Storage vs Session Storage

| Local Storage | Session Storage |
|---------------|-----------------|
| Data persists after browser is closed | Data is deleted when the browser/tab is closed |
| Shared across tabs of the same origin | Limited to the current browser tab |
| Stores data until manually removed | Exists only for the current session |

---

# Interview Tips

### Q1. What is Local Storage?

> Local Storage is a browser feature that stores data as key-value pairs. The data persists even after the browser is closed.

---

### Q2. Why do we use `JSON.stringify()` with Local Storage?

> Local Storage stores only strings. `JSON.stringify()` converts JavaScript objects into JSON strings before storing them.

---

### Q3. Why do we use `JSON.parse()` after retrieving data?

> `localStorage.getItem()` returns a string. `JSON.parse()` converts that JSON string back into a JavaScript object.

---

### Q4. Does Local Storage expire?

> No. Data remains in Local Storage until it is manually removed using `removeItem()`, `clear()`, or browser settings.