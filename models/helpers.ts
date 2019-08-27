import { pathOr } from 'ramda'

export const height = pathOr(0, ['length'])
export const width = pathOr(0, [0, 'length'])
