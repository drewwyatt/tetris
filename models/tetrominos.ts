import { pathEq } from 'ramda'
import { width } from './helpers'

// prettier-ignore
export const I = [
  [1],
  [1],
  [1],
  [1],
] as const

// prettier-ignore
export const T = [
  [1, 1, 1],
  [0, 1, 0],
] as const

// prettier-ignore
export const O = [
  [1, 1],
  [1, 1],
] as const

// prettier-ignore
export const S = [
  [0, 1, 1],
  [1, 1, 0],
] as const

// prettier-ignore
export const Z = [
  [1, 1, 0],
  [0, 1, 1],
] as const

// prettier-ignore
export const J = [
  [0, 1],
  [0, 1],
  [1, 1],
] as const

// prettier-ignore
export const L = [
  [1, 0],
  [1, 0],
  [1, 1],
] as const

export type Tetromino = ReadonlyArray<ReadonlyArray<1 | 0>>

export const hasBlockAt = (tetromino: Tetromino, row: number, column: number): boolean =>
  pathEq([row, column], 1, tetromino)

export const rotate = (tetromino: Tetromino) =>
  tetromino.reduce(
    (acc, row) => acc.map((r, i) => [row[i], ...r]),
    Array(width(tetromino)).fill([]),
  ) as Tetromino
