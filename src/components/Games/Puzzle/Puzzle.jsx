import React from 'react'
import { NavLink } from "react-router-dom";
import s from './Puzzle.module.css'

const Puzzle = () => {
  return (
    <div className={s.puzzle}>
      <NavLink to={'https://oleksiiherasymchuk.github.io/Puzzle/'}>
        <button>Puzzle</button>
      </NavLink>
    </div>
  )
}

export default Puzzle