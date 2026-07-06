# Inconsistency of Result in JavaScript

## Introduction

When performing arithmetic operations with decimal numbers in JavaScript, the result may not always be mathematically exact.

### Example

```javascript
console.log(7.99 + 20.56);
```

**Output**

```text
28.549999999999997
```

The expected mathematical result is:

```text
28.55
```

---

# Theory

This happens because JavaScript stores all regular numbers using the **IEEE 754 double-precision floating-point format**.

Many decimal numbers (such as `0.1`, `0.2`, `7.99`, and `20.56`) cannot be represented exactly in binary, so small rounding errors occur during calculations.

---

# Solution

A common solution when working with currency is to convert the values to the smallest unit (for example, **paise** instead of **rupees**), perform the calculation, and then convert the result back.

### Example

```javascript
let amount1 = 799;   // 7.99 rupees = 799 paise
let amount2 = 2056;  // 20.56 rupees = 2056 paise

let total = (amount1 + amount2) / 100;

console.log(total);
```

**Output**

```text
28.55
```

---

# Percentage Calculation

### Formula

```text
Percentage = (Value × Percentage) / 100
```

### Example

The total amount is:

```text
2056 + 799 = 2855 paise
```

### Calculate 10%

```javascript
let tenPercent = ((2056 + 799) * 0.1) / 100;

console.log(tenPercent);
```

---

### Percentage Values

```text
10% = 10 / 100 = 0.1
20% = 20 / 100 = 0.2
30% = 30 / 100 = 0.3
50% = 50 / 100 = 0.5
100% = 100 / 100 = 1
```

---

# Discount Calculation

### 10% Discount

```javascript
let discountedAmount = ((2056 + 799) * 0.9) / 100;

console.log(discountedAmount);
```

---

# Bonus Calculation

### 10% Bonus

```javascript
let bonusAmount = ((2056 + 799) * 1.1) / 100;

console.log(bonusAmount);
```

---

# Summary

- JavaScript may produce small inaccuracies while performing decimal arithmetic.
- This occurs because decimal numbers are stored in binary floating-point format.
- For money-related calculations, convert values to the smallest unit (such as paise or cents), perform the calculations, and convert back.
- Use percentage formulas for calculating discounts, bonuses, taxes, and commissions.