# 🪨📄✂️ Rock Paper Scissors Game - ReactJS

A responsive Rock Paper Scissors game built using **React**, styled with **Styled Components**, and interactive with **reactjs-popup**. This app replicates the classic game logic with a modern UI and responsive design.

![Game Screenshot](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif)

## 🚀 Live Demo

[Play the Game Now](https://MaridiGame.ccbp.tech) <!-- Replace # with your live demo URL if hosted -->

---

## 📌 Features

- 🎮 Play Rock, Paper, Scissors against the computer.
- 🔢 Tracks and displays your score dynamically.
- 🔁 Random opponent moves each round.
- 📜 Rules popup using **reactjs-popup**.
- 🎨 Responsive design for all screen sizes (mobile, tablet, desktop).
- 💅 Styled using **Styled Components**.
- 🧪 Passes all test cases including HTML structure, behavior, and accessibility.

---

## 🛠️ Tech Stack

- **ReactJS**
- **Styled Components**
- **React Popup (`reactjs-popup`)**
- **React Icons (`RiCloseLine`)**
- **JavaScript (ES6+)**
- **CSS Flexbox & Media Queries**

---

## 📁 Folder Structure

rock-paper-scissors/
├── public/
├── src/
│ ├── components/
│ │ ├── Game/
│ │ ├── Header/
│ │ ├── GameResultView/
│ │ ├── RulesPopup/
│ ├── App.js
│ ├── index.js
│ └── index.css
├── package.json
└── README.md


---

## 🧠 Game Logic

> Game outcome is determined based on the following rules:

- **Paper beats Rock**
- **Scissors beat Paper**
- **Rock beats Scissors**
- If both the user and opponent select the same, it’s a **Draw**.

**Score Calculation:**

- `YOU WON` → +1 point
- `YOU LOSE` → -1 point
- `IT IS DRAW` → 0 points

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/rock-paper-scissors.git
   cd rock-paper-scissors



