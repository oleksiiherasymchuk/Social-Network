import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
        
        <div className={s.title}>
            Social Network | <span>Pet Project</span> 
        </div>

        <div className={s.bar}>
            <button className={s.signIn}>Sign In</button>
            <button className={s.signOut}>Sign Out</button>
        </div>

    </div>
  )
}

export default Header;