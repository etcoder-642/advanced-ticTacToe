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
* [cite_start]**Dual Gameplay Modes:** Players can toggle between **Human Mode** for local 1v1 play and **Computer Mode** to face an automated opponent[cite: 13, 14, 15, 16].
* [cite_start]**Minimax AI with Alpha-Beta Pruning:** The computer opponent uses a recursive Minimax algorithm to evaluate possible board states, ensuring optimal play[cite: 25, 33].
* [cite_start]**Smart State Management:** Utilizes a centralized `gameStore` module to manage the board array, player identities, and game flags like board locking[cite: 77, 78, 79].
* [cite_start]**Dynamic UI Messaging:** An integrated overlay system provides immediate feedback for wins and draws, with an option to "See Board" to inspect the final state[cite: 18, 19, 44, 45].
* [cite_start]**Automated Turn Execution:** In Computer Mode, the game uses a `setTimeout` to simulate a "thinking" delay for the AI's move[cite: 12].

## Tech Stack
* [cite_start]**Language:** JavaScript (ES6+ Modules)[cite: 1, 2, 3].
* [cite_start]**Logic:** Minimax Algorithm for decision tree evaluation[cite: 25, 36].
* [cite_start]**Styling:** CSS3 for responsive layout and dynamic themes[cite: 1, 43, 44].
* [cite_start]**Bundler:** Webpack for module resolution and dependency management[cite: 1].

## Core Architecture
[cite_start]The project is split into specialized utility modules to maintain a clean separation of concerns[cite: 1]:

* [cite_start]**`computerPlayer.js`**: Contains the recursive logic that calculates the best move for the AI[cite: 25, 36, 42].
* [cite_start]**`gameAction.js`**: Manages the execution of moves, updating the board array, and triggering the win-checker[cite: 52, 60, 61, 65].
* [cite_start]**`gameStore.js`**: The single source of truth for the game's data, including board state and active player[cite: 77, 81, 83, 85].
* [cite_start]**`winChecker.js`**: Pure functions dedicated to scanning for three matching symbols or draw conditions[cite: 92, 98].

## Project Structure
```text
advanced-ticTacToe
|-src
  [cite_start]|-styles/       # main.css for layout and themes [cite: 1]
  [cite_start]|-utils/        # Specialized logic modules (Minimax, State, UI) [cite: 1]
  [cite_start]|-index.html    # Game structure [cite: 1]
  [cite_start]|-index.js      # Main entry point and event delegation [cite: 1]
[cite_start]|-webpack.config.js # Build configuration [cite: 1]
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
* [cite_start]**Alpha-Beta Pruning:** The AI implementation includes `alpha` and `beta` parameters to stop evaluating branches that cannot improve the current outcome[cite: 25, 33].
* [cite_start]**State Reset Logic:** The game effectively clears the board and internal player arrays when switching modes or restarting[cite: 14, 16, 17, 86].
* [cite_start]**Coordinate Mapping:** The `utilities.js` module translates 2D grid IDs (like "00") into 1D indices for the Minimax algorithm[cite: 87, 88].
