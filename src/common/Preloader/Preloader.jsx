import React from 'react'
import load from './image/load.gif'

let preloader = {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

let img = {
    height: '75%',
    width: '50%',
}

const Preloader = () => {
  return (
    <div style={preloader}>
        <img src={load} alt="" style={ img } />
    </div>
  )
}

export default Preloader