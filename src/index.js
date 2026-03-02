import "./styles/main.css"
import { checkWin } from "./utils/winChecker.js";
import { checkDraw } from "./utils/winChecker.js";
import { switchPlayer } from "./utils/gameState.js";
import { createGameState } from "./utils/gameState.js";
import { display } from "./utils/display.js";
import { getComputerMove } from "./utils/computerPlayer.js";


/* 
   Module Description:
     It is a module that returns several reusable functions for repeated usage,
     and stores important values like board, player and other boolean variables
     that are used as flags for several instances or events.
*/

const gameAction = (() => {
    // flag boolean - indicates whether the current move is the first move or not
    let checkInitial = true;

    // flag boolean - locks the board if a user wants to see the board state after a match
    let boardLocked = false;

    /* 
       humanMode = true, computerMode = false 
       (the reason it is false now is because gameAction.applyMode() /line 238/ runs immediately and makes it humanMode)
    */
    let mode = false;
    let player = [];
    let board = [];

    const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const values = ['00', '01', '02', '10', '11', '12', '20', '21', '22'];

    return {
        /*
           Function Description:
              - to convert the single digit values returned by the computerMove 
              to a two digit format like the one in the values array. 
        */
        convertIndextoValue: function (index) {
            let v = 0;
            for (let i = 0; i < indexes.length; i++) {
                if (index === indexes[i]) {
                    v = values[i]
                }
            };
            return v;
        },
        convertValuetoIndexes: function (value) {
            let v = 0o0;
            for (let i = 0; i < value.length; i++) {
                if (value === values[i]) {
                    v = indexes[i];
                }
            }
            return v;
        },
        getCheckInitial: function () {
            return checkInitial;
        },
        setCheckInitial: function (value) {
            checkInitial = value;
        },
        getBoardLocked: function () {
            return boardLocked;
        },
        setBoardLocked: function (value) {
            boardLocked = value;
        },
        getMode: function () {
            return mode;
        },

        // changes mode and applies visual changes
        applyMode: function () {
            mode = !mode;
            if (mode) {
                display.humanMode();
            } else {
                display.computerMode();
            }
        },
        // creates two players with name, symbol, and id keys
        createPlayer: function () {
            player.push({ name: 'Player1', symbol: '\u2715', id: 1 });
            player.push({ name: 'Player2', symbol: '\u25EF', id: 2 });
            return player;
        },
        // creates an instance of board
        createGame: function () {
            board = createGameState();
            return board;
        },
        getPlayer: function () {
            return player;
        },
        getBoard: function () {
            return board;
        },

        /*
            Function Description:
                - updates the board by taking the clicked user value
            Prototype
                function (board, player, str, num)
            Parameters:
                @board: a two dimensional array of the current board state
                @player: an array containing two objects about two players
                @str: the id of the element clicked by the user(usually represented by two numbers like 00,01,02...)
                @num: the current player(tracked by the currentPlayer variable inside this module and swings between 0 & 1 by each click)
            Returns:
               the updated board
        */
        updateBoard: function (board, player, str, num) {
            board[str[0]][str[1]] = player[num].id;
            return board;
        },
        // checks for a win or draw and updates visual elements accordingly.
        checkWinner: function (array) {
            if (checkWin(array) == 1) {
                display.popUpMode('Player1 Won');
                return 1;
            } else if (checkWin(array) == 2) {
                display.popUpMode('Player2 Won');
                return 1;
            } else if (checkDraw(array)) {
                display.popUpMode('The game ended in a Draw');
                return 1;
            } else { return 0; }
        },
        resetGame: function () {
            board = [];
            player = [];
        },
        currentPlayer: 2,
    }
})();


document.addEventListener('click', (e) => {
    /*
       Function Description:
            An internal function that executes move by taking the id of a player
            and the user clicked box or element
        Prototype:
            function executeMove(targetElement, playerID)
        Parameters:
            @targetElement: refers to clicked element usually identified by e.target
            @playerID: refers to the id of the current player, also tracked by gameAction.currentPlayer
        Returns:
            It doesn't return anything just performs a move action.
    */

    function executeMove(targetElement, playerID) {
        let player = gameAction.getPlayer();
        let board = gameAction.getBoard();
        let str = targetElement.id;

        /* 
            - Prevents User from changing Values of already selected board Spaces. 
            Board Spaces can have 3 values 0 - nothing in space, 
            1 - Player1 have selected the spot, 2 - Player1 have selected the spot
        */
        if (board[str[0]][str[1]] != 0) {
            return;
        }
        board = gameAction.updateBoard(board, player, str, playerID);
        e.target.innerHTML = player[playerID].symbol;

        gameAction.checkWinner(board);
    }

    // Conditions: The Board is not Locked(i.e. players are playing), human Mode
    if (e.target.classList.contains('space') && gameAction.getBoardLocked() == false && gameAction.getMode() === true) {
        if (gameAction.getCheckInitial()) {
            gameAction.setCheckInitial(false);
            gameAction.createGame();   // This fills the internal board array
            gameAction.createPlayer(); // This fills the internal player array
            gameAction.currentPlayer = 0;
        }
        executeMove(e.target, gameAction.currentPlayer)

        // switches Player (0<->1)
        gameAction.currentPlayer = switchPlayer(gameAction.currentPlayer);
    } // Conditions: Board is not locked, computer Mode
    else if (e.target.classList.contains('space') && gameAction.getBoardLocked() == false && gameAction.getMode() == false) {
        if (gameAction.getCheckInitial()) {
            gameAction.setCheckInitial(false);
            gameAction.createGame();   // This fills the internal board array
            gameAction.createPlayer(); // This fills the internal player array
            gameAction.currentPlayer = 0;
        }
        executeMove(e.target, gameAction.currentPlayer);
        // switches Player (0<->1)
        gameAction.currentPlayer = switchPlayer(gameAction.currentPlayer);

        /*
           Since this is a computerMode the second player is always the computer. 
           It executes a click for the computer suggested move. 
        */
        if (gameAction.currentPlayer == 1) {
            let board = gameAction.getBoard();
            let num = getComputerMove(JSON.parse(JSON.stringify(board)), 1);
            let secondNum = gameAction.convertIndextoValue(num);
            let sampleSpace = document.getElementById(secondNum);

            // Allows a click to happen only if a previous board state have not determined a winner or a draw.
            if (gameAction.checkWinner(board) === 0) {
                setTimeout(() => { sampleSpace.click(); }, 200);
            }
        }
    }// things that happen when the 'human-mode' button is clicked.
    else if (e.target.classList.contains('human-mode')) {
        gameAction.applyMode();
        gameAction.resetGame();
        display.resetGame();
    } // things that happen when the 'computer-mode' button is clicked.
     else if (e.target.classList.contains('computer-mode')) {
        gameAction.setCheckInitial(true);
        gameAction.applyMode();
        gameAction.resetGame();
        display.resetGame();
    } // things that happen when the 'Reset Game' or 'Restart Game' button are clicked
     else if (e.target.classList.contains('reset-pop') || e.target.classList.contains('reset-btn')) {
        gameAction.setBoardLocked(false);
        gameAction.setCheckInitial(true);
        gameAction.resetGame();
        display.resetGame();
    } // things when the 'See Board' button is clicked
     else if (e.target.classList.contains('rem-pop')) {
        display.noPopUpMode();
        gameAction.setBoardLocked(true);
    }
})

gameAction.applyMode();