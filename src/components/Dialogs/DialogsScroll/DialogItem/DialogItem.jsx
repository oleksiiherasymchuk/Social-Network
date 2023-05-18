import React from "react";
import s from "./DialogItem.module.css";
import man from "../../../Profile/ProfileInfo/images/man.png";

const DialogItem = () => {
  return (
    <div className={s.dialogItem}>
      <div className={s.dialogAvatar}>
        <img src={man} alt="" />
      </div>
      <div>
        <p>Person</p>
      </div>
    </div>
  );
};

export default DialogItem;
