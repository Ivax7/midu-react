import { useState, useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti';

import { Square } from './components/Square.jsx'
import { TURNS } from './components/constants.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'


function App() {

  const [board, setBoard] = useState(() => {
    
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    
    return Array(9).fill(null)
    }
  )

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });



  const resetGame = () => {
    // seteamos el estado a sus valores iniciales
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    
    resetGameStorage()

  }

  // estado para saber si hay ganador
  // null no hay ganador, false es empate
  const [winner, setWinner] = useState(null) 


  const updateBoard = (index) => {
    // No actualizar el board si ya hay una ficha en ese índice o si hay un ganador
    if(board[index] || winner) return

    // ACTUALIZAR EL TABLERO
    // Hacemos una copia del array para no mutarlo
    const newBoard = [...board];
    newBoard[index] = turn; // x u o
    setBoard(newBoard) // hemos actualizado el board

    // CAMBIAR EL TURNO
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; // giramos los turnos en el siguiente
    setTurn(newTurn) // establecemos el valor del turno al nuevo turno

    // guardar la partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // resiar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }


  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>

  )

}

export default App
