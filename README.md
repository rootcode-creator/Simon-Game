<h1 align="center">Simon Game</h1>

<p align="center"><i>Classic browser-based memory game built with HTML, CSS, and vanilla JavaScript.</i></p>

<p align="center">
	<img src="https://img.shields.io/badge/VERSION-1.0.0-E11D48?style=for-the-badge&logo=semanticrelease&logoColor=white&labelColor=7F1D1D" alt="Version 1.0.0" />
	<img src="https://img.shields.io/badge/LICENSE-MIT-84CC16?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=14532D" alt="MIT License" />
	<img src="https://img.shields.io/badge/TYPE-MEMORY%20GAME-8B5CF6?style=for-the-badge&labelColor=4C1D95" alt="Memory game" />
</p>

<p align="center">
	<img src="https://img.shields.io/badge/HTML5-MARKUP-F97316?style=for-the-badge&logo=html5&logoColor=white&labelColor=9A3412" alt="HTML5" />
	<img src="https://img.shields.io/badge/CSS3-STYLING-3B82F6?style=for-the-badge&logo=css3&logoColor=white&labelColor=1E3A8A" alt="CSS3" />
	<img src="https://img.shields.io/badge/JAVASCRIPT-VANILLA-F59E0B?style=for-the-badge&logo=javascript&logoColor=black&labelColor=92400E" alt="JavaScript" />
</p>

<p align="center">
	<a href="#-project-intro"><img src="https://img.shields.io/badge/EXPLORE-PROJECT%20INTRO-6366F1?style=for-the-badge&logo=gitbook&logoColor=white&labelColor=4F46E5" alt="Project intro" /></a>
	<a href="#️-install-methods"><img src="https://img.shields.io/badge/SETUP-INSTALL%20GUIDE-14B8A6?style=for-the-badge&logo=readme&logoColor=white&labelColor=0F766E" alt="Install guide" /></a>
	<a href="#-how-to-play"><img src="https://img.shields.io/badge/PLAY-HOW%20TO%20PLAY-A855F7?style=for-the-badge&logo=gamejolt&logoColor=white&labelColor=7E22CE" alt="How to play" /></a>
</p>

## Simon Game — README

Simple memory challenge where players repeat an increasingly long color sequence.

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

`Simon Game` is a classic pattern-memory game with:

- Keyboard start trigger
- Randomized sequence progression per level
- Flash effects for game and user interactions
- Immediate sequence validation
- Game-over feedback with score and high-score

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

| Feature | Status | Notes |
| --- | --- | --- |
| Start trigger | ✅ Current | Press any key to begin the game |
| Sequence generator | ✅ Current | Adds one random color each level |
| Visual feedback | ✅ Current | Game flash + user click animations |
| Click validation | ✅ Current | Checks each user input in order |
| Scoring | ✅ Current | Tracks current score and highest score |
| Restart flow | ✅ Current | Fast reset after wrong click |

## 🧰 Tech stack

- **Structure:** HTML5
- **Styling:** CSS3
- **Logic:** JavaScript (Vanilla)

## ⚙️ Install methods

### 📦 Run locally

Prerequisites:

- Any modern browser (Chrome, Edge, Firefox)

```bash
git clone <your-repo-url>
cd Simon-Game
```

Open `index.html` directly in your browser.

Alternative (VS Code Live Server):

- Install Live Server extension.
- Right-click `index.html` and choose **Open with Live Server**.

## 🎮 How to play

1) Press any key to begin.
2) Memorize the flashed color sequence.
3) Click buttons in the exact same order.
4) Each level adds one new color.
5) A wrong click ends the round.

## 📜 Available scripts

No build or package scripts are required for this repository.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
