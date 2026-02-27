/*
    Function description:
        algorithm that scores the current or the future moves
        made by the current player
    Function prototype:
        function miniMax(board, symbol)
    Parameters:
        @board: current board state(2D Array)
        @symbol: number associated wih the current player
    Returns:
        The score of the current status or the score of
        the best move made by the opponent
*/
function miniMax(board, symbol)
{
    if (symbol == 0)
    {
        return -Infinity;
    }

    var win_state = checkWin(board);
    var draw_state = checkDraw(board);

    if (win_state == symbol)
    {
        return 1;
    } else if (win_state == switchPlayer(symbol))
    {
        return -1;
    } else if (win_state == 0 && draw_state == true)
    {
        return 0;
    } else
    {
    var dim = board.length;
    var scores = [];
    for (var i = 0; i < dim; i += 1)
    {
        for (var j = 0; j < dim; j += 1)
        {
            if (board[i][j] == 0)
            {
            var next_player = switchPlayer(symbol);
            var next_board = makeMove(board, symbol, i * dim + j)
            scores.push(-1 * miniMax(next_board, next_player));
            }
        }
    }
    return Math.max(...scores);
    }
}

/*
    Function description:
        function that suggests the the best move the current 
        player should make given the current board state
    Prototype:
        function getComputerMove(board, symbol)
    Parameters:
        @board: a two dimensional array that contains the current board state
        @symbol: the number associated with the player which the computer tries to help
    Returns:
        @index: the one dimensional index representation of the computer suggestion(from 0 .. 9)
*/
function getComputerMove(board, symbol)
{
    var draw_state = checkDraw(board);
    if (draw_state == true)
    {
        return null;
    }
  
    var dim = board.length;
    var bestMove = null;
    var maxScore = -Infinity;
    for (var i = 0; i < dim; i += 1)
    {
        for (var j = 0; j < dim; j += 1)
        {
            if (board[i][j] == 0)
            {
                var index = i * dim + j;
                var nextBoard = makeMove(board, symbol, index);
                if (miniMax(board, symbol) > maxScore)
                {
                    bestMove = index;
                }
            }
        }
    }
    return bestMove;
}
