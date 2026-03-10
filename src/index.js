import "./styles/main.css"
import { display } from "./utils/display.js";
import { getComputerMove } from "./utils/computerPlayer.js";
import { gameStore } from "./utils/gameStore.js";
import { utils } from "./utils/utilities.js";
import { gameAction } from "./utils/gameAction.js";

display.applyMode(true);
gameStore.setMode(true);
document.addEventListener('click', (e) => {
    // Conditions: The Board is not Locked(i.e. players are playing), human Mode
    if (e.target.classList.contains('space') && gameStore.getBoardLocked() == false && gameStore.getMode() === true) {
        if (gameStore.getCheckInitial()) {
            gameStore.setCheckInitial(false);
            gameStore.createGame();   // This fills the internal board array
            gameStore.createPlayer(); // This fills the internal player array
            gameStore.currentPlayer = 0;
        }
        gameAction.executeMove(e.target, gameStore.currentPlayer)
    } // Conditions: Board is not locked, computer Mode
    else if (e.target.classList.contains('space') && gameStore.getBoardLocked() == false && gameStore.getMode() == false) {
        if (gameStore.getCheckInitial()) {
            gameStore.setCheckInitial(false);
            gameStore.createGame();   // This fills the internal board array
            gameStore.createPlayer(); // This fills the internal player array
            gameStore.currentPlayer = 0;
        }
        gameAction.executeMove(e.target, gameStore.currentPlayer);

        /*
           Since this is a computerMode the second player is always the computer. 
           It executes a click for the computer suggested move. 
        */
        if (gameStore.currentPlayer == 1) {
            let board = gameStore.getBoard();
            let num = getComputerMove(JSON.parse(JSON.stringify(board)), 1);
            let secondNum = utils.convertIndextoValue(num);
            let sampleSpace = document.getElementById(secondNum);

            // Allows a click to happen only if a previous board state have not determined a winner or a draw.
            if (gameAction.checkWinner(board) === 0) {
                setTimeout(() => { sampleSpace.click(); }, 500);
            }
        }
    }// things that happen when the 'human-mode' button is clicked.
    else if (e.target.classList.contains('human-mode')) {
        if(gameStore.getMode()) return;
        gameStore.setMode(true);
        gameStore.setBoardLocked(false);
        display.applyMode(true);
        gameStore.resetGame();
        display.resetGame();
    } // things that happen when the 'computer-mode' button is clicked.
     else if (e.target.classList.contains('computer-mode')) {
        if(!gameStore.getMode()) return;
        gameStore.setCheckInitial(true);
        gameStore.setBoardLocked(false);
        display.applyMode(false);
        gameStore.setMode(false);
        gameStore.resetGame();
        display.resetGame();
    } // things that happen when the 'Reset Game' or 'Restart Game' button are clicked
     else if (e.target.classList.contains('reset-pop') || e.target.classList.contains('reset-btn')) {
        gameStore.setBoardLocked(false);
        gameStore.setCheckInitial(true);
        gameStore.resetGame();
        display.resetGame();
    } // things when the 'See Board' button is clicked
     else if (e.target.classList.contains('rem-pop')) {
        display.noPopUpMode();
        gameStore.setBoardLocked(true);
    }
})