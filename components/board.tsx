import { FC } from 'react'

const Board: FC = ({ children }) => (
  <div>
    <style jsx>{`
      svg {
        fill: orange;
        width: 100px;
      }
    `}</style>
    {children}
  </div>
)
export default Board
