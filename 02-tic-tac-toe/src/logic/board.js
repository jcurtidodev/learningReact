import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
}

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((Square) => Square !== null)
}

//Al separar la lógica de js puro se podrán reutilizar estos métodos en otros frameworks como Angular o Vue