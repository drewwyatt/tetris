import { all, equals } from 'ramda'
import { add, Board, createBoard, Space } from './board'
import { T, hasBlockAt } from './tetrominos'

describe('board', () => {
  let board: Board

  beforeEach(() => {
    board = createBoard()
  })

  it('should be empty when created', () => {
    expect(board.every(all(equals<Space>(Space.Empty)))).toEqual(true)
  })

  it('should register player spaces when a tetromino is added to the board', () => {
    board = add(board, T)
    expect(
      T.every((row, y) =>
        row.every((_, x) => {
          return hasBlockAt(T, y, x)
            ? board[y][x] === Space.Player
            : board[y][x] === Space.Empty
        }),
      ),
    ).toEqual(true)
  })
})
