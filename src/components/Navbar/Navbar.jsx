import React from "react";
import s from "./Navbar.module.css";
import message from "./images/message.png";
import cog from "./images/bxs-cog.svg";
import game from "./images/bxs-game.svg";
import news from "./images/bxs-news.svg";
import user from "./images/bxs-user.svg";
import home from "./images/bxs-home.svg";
import exit from "./images/bxs-exit.svg";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbarItems}>
        <span>
          <img src={home} alt="" />
        </span>
        <NavLink to="/profile" className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>Profile</NavLink>
      </div>
      <div className={s.navbarItems}>
        <span>
          <img src={message} alt="" />
        </span>
        <NavLink to="/messages" className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>Messages</NavLink>
      </div>
      <div className={s.navbarItems}>
        <span>
          <img src={user} alt="" />
        </span>
        <NavLink to="/users" className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>Users</NavLink>
      </div>
      <div className={s.navbarItems}>
        <span>
          <img src={news} alt="" />
        </span>
        <NavLink to="/news" className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>News</NavLink>
      </div>
      <div className={s.navbarItems}>
        <span>
          <img src={game} alt="" />
        </span>
        <NavLink to="/games" className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>Games</NavLink>
      </div>
      <div className={s.navbarItems}>
        <span>
          <img src={cog} alt="" />
        </span>
        <NavLink to="/settings" className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>Settings</NavLink>
      </div>
      <div className={s.navbarItems}>
        <span>
          <img src={exit} alt="" />
        </span>
        Log Out
      </div>
    </div>
  );
};

export default Navbar;
