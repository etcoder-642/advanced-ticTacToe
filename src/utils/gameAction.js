import { display } from "./display.js";
import { checkWin } from "./winChecker.js";
import { checkDraw } from "./winChecker.js";
import { gameStore } from "./gameStore.js";
import { switchPlayer } from "./gameState.js";

export const gameAction = (() => {
    return {
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
        executeMove: function (targetElement, playerID) {
            let player = gameStore.getPlayer();
            let board = gameStore.getBoard();
            let str = targetElement.id;

            /* 
                - Prevents User from changing Values of already selected board Spaces. 
                Board Spaces can have 3 values 0 - nothing in space, 
                1 - Player1 have selected the spot, 2 - Player1 have selected the spot
            */
            if (board[str[0]][str[1]] != 0) {
                return;
            }
            // switches Player (0<->1)
            gameStore.currentPlayer = switchPlayer(gameStore.currentPlayer);

            board = gameAction.updateBoard(board, player, str, playerID);
            targetElement.innerHTML = player[playerID].symbol;

            gameAction.checkWinner(board);
        }
    }
})();

