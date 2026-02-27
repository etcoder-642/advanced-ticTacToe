/*
    Function description:
        check if one of the players won given the current state
    Function prototype:
        function checkWin(board)
    Parametrs:
        @board: current board state(2D Array)
    Returns:
        The number associated with the winning player or
        the number zero of the game is not won yet
*/
function checkWin(board)
{
    for (var i = 0; i < board.length; i += 1)
    {
        if (board[i][0] != 0 && board[i][0] == board[i][1] && board[i][1] == board[i][2])
        {
            return board[i][0];
        } else if (board[0][i] != 0 && board[0][i] == board[1][i] && board[1][i] == board[2][i])
        {
            return board[0][i];
        }
    }

    if (board[0][0] != 0 && board[0][0] == board[1][1] && board[1][1] == board[2][2])
    {
        return board[0][0];
    } else if (board[0][2] != 0 && board[0][2] == board[1][1] && board[1][1] == board[2][0])
    {
        return board[0][2];
    } else
    {
        return 0;
    }
}

/*
    Function description:
        check if the game is over and the game is not won
    Function prototype:
        function checkDraw(board)
    Parameters:
        @board: current board state(2D Array)
    Returns:
        the value true if the game is completed and is in
        draw state, else the value false
*/
function checkDraw(board)
{
    for (var i = 0; i < board.length; i += 1)
    {
        for (var j = 0; j < board[i].length; j += 1)
        {
            if (board[i][j] == 0)
            {
                return false;
            }
        }
    }
    return false;
}
