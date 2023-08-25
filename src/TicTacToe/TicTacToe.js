import React, { useState } from "react";
import './TicTacToe.css';
import Fade from 'react-reveal/Fade';
export default function Tic(){
    const [turn,setTurn]=useState("x");
    const [cells,SetCells]=useState(Array(9).fill(''));
    const [winner, setWinner] = useState();

    const Win =(squares)=>{
        let combos={
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
        }

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
    }
    const Cell=({num})=>{
        return <td onClick={() => handleClick(num)} className="cells">{cells[num]}</td>
    }
    const handleClick=(num) =>{
        if(cells[num] !== ""){
            alert("already clicked")
            return ;

        }
        let squares= [...cells];
        if (turn === "x") {
            squares[num]="x";
            setTurn('o');
        }
        else{
            squares[num]="o";
            setTurn('x');
        }
        Win(squares);
        SetCells(squares)
    };

    const handleRestart = () => {
		setWinner(null);
        SetCells(Array(9).fill(''));
	};
    return(
    <Fade>
        <div className="container">
            <center>
                <h1>Turn : {turn}</h1>
                <tabel>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>

                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>

                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </tabel></center>
            {winner && (
				<>
					<h2>the winner is :{winner}</h2>
					<center><button onClick={() => handleRestart()} className="btn">Play Again</button></center>
				</>
			)}
            
        </div></Fade>
    )
}