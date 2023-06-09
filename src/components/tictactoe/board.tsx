import { useState } from "react";
import Square from "./square";

interface BoardProps {

}
type SquareValue = "X" | "O" | null;
function calculateWinner(squares: SquareValue[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export function Board(props: BoardProps) {

    const [state, setState] = useState({ squares: Array(9).fill(null), xIsNext: true });
    function handleClick(i: number) {
        const newSquares = [...state.squares];
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }
        newSquares[i] = state.xIsNext ? 'X' : 'O';
        setState({ squares: newSquares, xIsNext: !state.xIsNext });
    }
    function renderSquare(i: number) {
        return <Square
            onClick={() => handleClick(i)}
            value={state.squares[i]} />
    }
    const winner = calculateWinner(state.squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
