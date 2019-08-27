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

export const rotate = (tetromino: number[][]) =>
  tetromino.reduce(
    (acc, row) => acc.map((r, i) => [row[i], ...r]),
    Array(tetromino[0].length).fill([]),
  ) as number[][]
