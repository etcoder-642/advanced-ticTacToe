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
            let row = parseInt(str[0]);
            let col = parseInt(str[1]);
            board[row][col] = player[num].id;
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
        checkWinnerCM: function (boardObj, masterBoard) {
            let player = gameStore.getPlayer();

            if (checkWin(boardObj.board) == 1) {
                player[0].winCount++;
                boardObj.state = 1;
            } else if (checkWin(boardObj.board) == 2) {
                player[1].winCount++;
                boardObj.state = 1;
            } else if (checkDraw(boardObj.board)) {
                boardObj.state = 1;
            }

            let sumState = 0;
            for(let i=0;i<masterBoard.length;i++){
                sumState += masterBoard[i].state;
                console.log(sumState);
                console.log(masterBoard[i])
                if(sumState == 9){
                    if(player[0].winCount > player[1].winCount){
                        display.popUpMode('Player1 won the game!');
                    }else if(player[1].winCount > player[0].winCount){
                        display.popUpMode('Player2 won the game!');
                    }else {
                        display.popUpMode('The game ended in a draw');
                    }
                }
            }

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
        executeMove: function (targetElement) {
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

            console.log(gameStore.currentPlayer);

            board = gameAction.updateBoard(board, player, str, gameStore.currentPlayer);
            console.log(player);
            targetElement.innerHTML = player[gameStore.currentPlayer].symbol;

            gameAction.checkWinner(board);
        },
        executeMoveCM: function(targetElement) {
            let masterBoard = gameStore.getMasterBoard();
            let player = gameStore.getPlayer();
            let str = targetElement.id;

            let parentElement = targetElement.closest('.miniBoard');
            let num = parseInt(parentElement.id);
            if(masterBoard[num].state != 0) return;
            console.log(masterBoard, masterBoard[num]);
            console.log(str, targetElement);
            let currentBoard = masterBoard[num].board;

            if (currentBoard[str[0]][str[1]] != 0) {
                return;
            }

            // switches Player (0<->1)
            gameStore.currentPlayer = switchPlayer(gameStore.currentPlayer);
            let pIndex = gameStore.currentPlayer;


            masterBoard[num].board = gameAction.updateBoard(currentBoard, player, str, pIndex);
            targetElement.innerHTML = player[pIndex].symbol;

            gameAction.checkWinnerCM(masterBoard[num], masterBoard)
        }
    }
})();

