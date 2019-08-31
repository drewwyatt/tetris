import Direction from './direction'
import { dec, inc } from 'ramda'
import { Tetromino, hasBlockAt } from './tetrominos'

export const BOARD_WIDTH = 12
export const BOARD_HEIGHT = 20

export enum Space {
  Empty,
  Player,
  Pile,
}

const isPlayer = (space: Space): space is Space.Player => space === Space.Player

export type Board = Space[][]

export const createBoard = () =>
  Array.from(Array(BOARD_HEIGHT), () => Array(BOARD_WIDTH).fill(Space.Empty))

export const add = (board: Board, tetromino: Tetromino): Board =>
  board.reduce(
    (boardAcc, row, rowIdx) => [
      ...boardAcc,
      row.map((space, colIdx) =>
        hasBlockAt(tetromino, rowIdx, colIdx) ? Space.Player : space,
      ),
    ],
    [] as Board,
  )

const adjustPlayerX = (adjust: (n: number) => number) => (board: Board): Board => board.reduce((acc, row, idx) => {
  const playerSpaces =
}, [])

export const movePlayer = (board: Board, direction: Direction): Board => {

}
