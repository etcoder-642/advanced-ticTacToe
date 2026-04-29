# Advanced TicTacToe

A robust, modular TicTacToe application featuring a challenging AI opponent. This project demonstrates advanced JavaScript concepts, including the Minimax algorithm, state management patterns, and professional build tooling with Webpack.

## 🔗 Live Demo
The project is hosted on GitHub Pages. You can play it directly here:
**[https://etcoder-642.github.io/advanced-ticTacToe/](https://etcoder-642.github.io/advanced-ticTacToe/)**

## Visual Demo
#### Simple-mode
<img width="1895" height="855" alt="image" src="https://github.com/user-attachments/assets/dec49436-456f-496a-a6c1-9acfd6e6a752" />

#### Complex-mode (unreleased feature)
<img width="1906" height="847" alt="image" src="https://github.com/user-attachments/assets/0edbceb4-70c2-4703-97ea-62748860c364" />

## Features
* **Dual Gameplay Modes:** Players can toggle between **Human Mode** for local 1v1 play and **Computer Mode** to face an automated opponent.
* **Minimax AI with Alpha-Beta Pruning:** The computer opponent uses a recursive Minimax algorithm to evaluate possible board states, ensuring optimal play.
* **Smart State Management:** Utilizes a centralized `gameStore` module to manage the board array, player identities, and game flags like board locking.
* **Dynamic UI Messaging:** An integrated overlay system provides immediate feedback for wins and draws, with an option to "See Board" to inspect the final state.
* **Automated Turn Execution:** In Computer Mode, the game uses a `setTimeout` to simulate a "thinking" delay for the AI's move.

## Tech Stack
* **Language:** JavaScript (ES6+ Modules).
* **Logic:** Minimax Algorithm for decision tree evaluation.
* **Styling:** CSS3 for responsive layout and dynamic themes.
* **Bundler:** Webpack for module resolution and dependency management.

## Core Architecture
The project is split into specialized utility modules to maintain a clean separation of concerns:

* **`computerPlayer.js`**: Contains the recursive logic that calculates the best move for the AI.
* **`gameAction.js`**: Manages the execution of moves, updating the board array, and triggering the win-checker.
* **`gameStore.js`**: The single source of truth for the game's data, including board state and active player.
* **`winChecker.js`**: Pure functions dedicated to scanning for three matching symbols or draw conditions.

## Project Structure
```text
advanced-ticTacToe
|-src
  |-styles
   |- main.css
  |- utils
    |- computerPlayer.js
    |- display.js
    |- gameAction.js
    |- gameState.js
    |- gameStore.js
    |- utilities.js
    |- winChecker.js
  |- index.html
  |- index.js
|- .gitignore
|- LICENSE
|- README.md
|- package.json && package-lock.json
|- webpack.config.js
```

## How to Run
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/etcoder-642/advanced-ticTacToe.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Launch the development server:**
    ```bash
    npx webpack serve
    ```

## Logic Highlights
* **Alpha-Beta Pruning:** The AI implementation includes `alpha` and `beta` parameters to stop evaluating branches that cannot improve the current outcome.
* **State Reset Logic:** The game effectively clears the board and internal player arrays when switching modes or restarting.
* **Coordinate Mapping:** The `utilities.js` module translates 2D grid IDs (like "00") into 1D indices for the Minimax algorithm.
