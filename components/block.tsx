import { FC } from 'react'

export type Props = {
  x: number
  y: number
  color: string
}

const Block: FC<Props> = ({ x, y, color }) => (
  <rect
    id={[x, y].join('-')}
    x={`${x * 10}px`}
    y={`${y * 10}px`}
    width="10px"
    height="10px"
    style={{ fill: color, stroke: 'black', strokeWidth: '1px' }}
  >
    10
  </rect>
)

export default Block
