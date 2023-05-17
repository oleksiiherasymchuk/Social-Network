import React from 'react'
import s from './Games.module.css'
import Puzzle from './Puzzle/Puzzle'

const Games = () => {
  return (
    <div className={s.games}>
      <h1>Games</h1>
      <Puzzle />
    </div>
  )
}

export default Games