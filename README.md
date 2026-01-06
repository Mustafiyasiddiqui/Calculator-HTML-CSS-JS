# Calculator App 🧮

A fully functional calculator built using **HTML, CSS, and Vanilla JavaScript** with clean state-based logic and no use of `eval()`.

## ✨ Features

- Basic arithmetic operations: **Addition, Subtraction, Multiplication, Division**
- Percentage calculation
- Decimal support
- Plus/Minus toggle (+/-)
- Clear (C) and Backspace (⌫)
- Real-time display updates
- Responsive UI using CSS Grid
- Safe custom calculation logic (no `eval`)

## 🛠 Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling & layout (CSS Grid)
- **JavaScript (ES6)** – Logic & interactivity
- **Font Awesome** – Icons

## 🧠 Logic Overview

The calculator is built using **state-based logic**:

- `currentValue` → current number being typed
- `previousValue` → stored number before operation
- `operator` → selected arithmetic operator

All calculations are handled using a custom calculation engine implemented with `switch-case`, ensuring better control and safety.

## 📂 Project Structure

calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md

markdown
Copy code

## 🚀 How It Works

1. User clicks number buttons → value is appended to `currentValue`
2. Operator click stores `currentValue` into `previousValue`
3. `=` triggers calculation based on selected operator
4. Result is displayed and state is reset
5. Special actions like `+/-`, `C`, and `⌫` are handled separately using `data-*` attributes

## ✅ Why No `eval()`?

Using `eval()` can be unsafe and unpredictable.  
This calculator uses explicit arithmetic logic for:
- Better security
- Clear debugging
- Interview-safe code

## 📸 Preview

> (Add a screenshot or GIF here if you want)

## 🧪 Future Improvements

- Keyboard support
- Operator chaining (e.g. `5 + 6 × 2`)
- Scientific calculator functions
- React version

## 👤 Author

**Mustafiya**

---

Feel free to ⭐ the repository if you like it!
