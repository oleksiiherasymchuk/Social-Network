import React from "react";
import s from "./New.module.css";
import news from "./images/news.webp";
import { NavLink } from "react-router-dom";

const New = (props) => {
  return (
    <>
      <div className={s.new}>
        <div className={s.newImage}>
          {props.news?.image_url ? (
            <img src={props.news.image_url} alt="newsImage" />
          ) : (
            <img src={news} alt="newImage" />
          )}
        </div>
        <div className={s.newTitle}>{props.news.title}</div>
        <div className={s.readMore}>
          <NavLink to={props.news?.link}>
            <button>Read more</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default New;
