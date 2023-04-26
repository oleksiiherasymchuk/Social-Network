import React from "react";
import s from "./Footer.module.css";
import ukraine  from './images/ukraine.png'

const Footer = () => {
  return <div className={s.footer}>Social Network By Oleksii Herasymchuk <span> <img src={ukraine} alt="ukraine" /> </span> </div>;
};

export default Footer;
