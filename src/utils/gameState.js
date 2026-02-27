/*
    Function description:
        Create a board
    Function prototype:
        function creategameState()
    Returns:
        Initialize board state for a new game
*/
function createGameState()
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
function switchPlayer(player)
{
    if (player == 0)
    {
        return Math.random() < 0.5 ? 1 : 2;
    } else if (player == 1)
    {
        return 2;
    } else if (player == 2)
    {
        return 1;
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
function makeMove(board, player, index)
{
    if (index < 0 || index >= board.length * board[0].length)
    {
        return null;
    }
    row = Math.floor(index / 3);
    col = index % 3;

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
