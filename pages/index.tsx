import React from 'react'
import Head from 'next/head'
import Board from '../components/board'
import { I, O } from '../components/tetrominos'

const Game = () => (
  <div>
    <Head>
      <title>Tetris</title>
    </Head>

    <Board>
      <I xOffset={0} yOffset={0} />
      <O xOffset={2} yOffset={2} />
    </Board>
  </div>
)

export default Game
