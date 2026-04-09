# Simon Game — README

Classic browser-based Simon memory game built with HTML, CSS, and vanilla JavaScript.

## Table of Contents

- [🚀 Project intro](#-project-intro)
- [📁 Project structure](#-project-structure)
- [🔧 Features](#-features)
- [🧰 Tech stack](#-tech-stack)
- [⚙️ Install methods](#️-install-methods)
	- [📦 Run locally](#-run-locally)
- [🎮 How to play](#-how-to-play)
- [📜 Available scripts](#-available-scripts)
- [📄 License](#-license)

## 🚀 Project intro

`Simon Game` is a simple memory challenge where players must repeat an increasingly long sequence of colors.

- Press any key to start.
- Watch the highlighted color sequence.
- Repeat the same order by clicking the color buttons.
- One wrong click ends the game and shows your score + highest score.

Reference: [How to play Simon](https://www.youtube.com/watch?v=EWJ5uYwQJGU)

## 📁 Project structure

```txt
Simon-Game/
├── index.html          # App markup and game board
├── simonGame.css       # Styles for layout, buttons, and effects
├── simonGame.js        # Game logic (levels, sequence checks, scoring)
├── README.md
└── LICENSE
```

## 🔧 Features

- Keyboard start trigger (`keypress`)
- Random color sequence generation per level
- Visual game flash and user-click flash effects
- Sequence validation after every click
- Game-over state with score and highest-score tracking
- Quick restart flow after game over

## 🧰 Tech stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## ⚙️ Install methods

### 📦 Run locally

Prerequisites:

- Any modern browser (Chrome, Edge, Firefox)

Steps:

1. Clone this repository:

```bash
git clone <your-repo-url>
cd Simon-Game
```

2. Open `index.html` directly in your browser.

Alternative (VS Code Live Server):

- Install Live Server extension
- Right-click `index.html` → **Open with Live Server**

## 🎮 How to play

1. Press any key to begin.
2. Memorize the flashed button color.
3. Click buttons in the exact same order.
4. Each new level adds one more color to the pattern.
5. If you click the wrong color, the game ends.

## 📜 Available scripts

No build or package scripts are required for this project.

## 📄 License

This project includes a `LICENSE` file in the repository root.
