
import { WINNER_COMBOS } from '../components/constants.js'

// Método que comprueba el ganador
// revisamos todas las combinaciones ganadoras para ver si x u o ganó
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo // [0, 1, 2] por ej

      if(
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> x, x u o, o
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // x u o
      }
    }
    // si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
  // resiamos si hay un empate si no hay más espacios vacíos en el tablero
  return newBoard.every((square) => square !== null)
}