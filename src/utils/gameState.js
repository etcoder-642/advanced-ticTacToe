/*
    Function description:
        Create a board
    Function prototype:
        function creategameState()
    Returns:
        Initialize board state for a new game
*/
export function createGameState()
{
    return [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]];
}

/*
    Function description:
        Track the current player
    Function prototype:
        function switchPlayer(player)
    Parameters:
        @player: the current player
    Returns:
        the next player
*/
export function switchPlayer(player)
{
    if (player == 2)
    {
        return Math.random() < 0.5 ? 0 : 1;
    } else if (player == 0)
    {
        return 1;
    } else if (player == 1)
    {
        return 0;
    } else
    {
        return -1;
    }
}

/*
    Function description:
        Validate and apply moves, and return the updated board
    Function prototype:
        function makeMove(board, player, index)
    Parameters:
        @board: current board state
        @player: current player
        @index: the move intended by the current player
    Returns:
        The new board state given a valid move
*/
export function makeMove(board, player, index)
{
    if (index < 0 || index >= board.length * board[0].length)
    {
        return null;
    }
    let row = Math.floor(index / 3);
    let col = index % 3;

    if (board[row][col] != 0)
    {
        return null;
    }

    if (player != 1 && player != 2)
    {
        return null;
    }

    board[row][col] = player;
    return board;
}
