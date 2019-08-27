import { FC } from 'react'
import Block, { Props as BlockProps } from './block'

enum Color {
  Blue = 'blue',
  Cyan = 'cyan',
  Green = ' green',
  Orange = 'orange',
  Purple = 'purple',
  Red = 'red',
  Yellow = 'yellow',
}

enum Orientation {
  Top,
  Right,
  Bottom,
  Left,
}

type BlockSet = [JSX.Element, JSX.Element, JSX.Element, JSX.Element]

const Tetromino: FC<{
  children: BlockSet
}> = ({ children }) => <svg>{children}</svg>

type Offsets = { xOffset: number; yOffset: number }
type Props = Offsets

// type OrientationMapper = (offsets: Offsets, idx: number) => BlockProps

export const I: FC<Props> = ({ xOffset, yOffset }) => (
  <Tetromino>
    <Block x={xOffset} y={yOffset} color={Color.Cyan} />
    <Block x={xOffset} y={yOffset + 1} color={Color.Cyan} />
    <Block x={xOffset} y={yOffset + 2} color={Color.Cyan} />
    <Block x={xOffset} y={yOffset + 3} color={Color.Cyan} />
  </Tetromino>
)

export const O: FC<Props> = ({ xOffset, yOffset }) => (
  <Tetromino>
    <Block x={xOffset} y={yOffset} color={Color.Yellow} />
    <Block x={xOffset + 1} y={yOffset} color={Color.Yellow} />
    <Block x={xOffset} y={yOffset + 1} color={Color.Yellow} />
    <Block x={xOffset + 1} y={yOffset + 1} color={Color.Yellow} />
  </Tetromino>
)

// export const J: FC<Props> = () => <Tetromino />
// export const L: FC<Props> = () => <Tetromino />
// export const S: FC<Props> = () => <Tetromino />
// export const T: FC<Props> = () => <Tetromino />
// export const Z: FC<Props> = () => <Tetromino />
