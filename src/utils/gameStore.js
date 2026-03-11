import { createGameState } from "./gameState.js";
export const gameStore = (() => {
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
    let masterBoard = [];
    let complexMode = false;

    return {
        getComplexMode: function () {
            return complexMode;
        },
        setComplexMode: function (value) {
            complexMode = value;
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
        setMode: function (value) {
            mode = value;
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
        resetGame: function () {
            board = [];
            player = [];
        },
        createMasterBoard: function (num) {
            for (let i = 0; i < num; i++) {
               board = createGameState();
                masterBoard.push({ i, board, winState:0});
            }
        },
        getMasterBoard: function () {
            return masterBoard;
        },
        createPlayerCM: function () {
            player.push({ name: 'Player1', symbol: '\u2715', winCount: 0});
            player.push({ name: 'Player2', symbol: '\u25EF', winCount: 0});
            return player;
        },
        currentPlayer: 2
    }
})()