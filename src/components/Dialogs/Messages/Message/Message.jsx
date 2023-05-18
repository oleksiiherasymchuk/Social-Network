import React from "react";
import s from "./Message.module.css";
import man from "../../../Profile/ProfileInfo/images/man.png";

const Message = () => {
  return (
    <div className={s.message}>
      <div className={s.messageImg}>
        <img src={man} alt="" />
      </div>
      <div className={s.messageText}>
        <span className={s.messageTextItem}>message text</span>
        <span className={s.messageTextTime}>14:14</span>
      </div>
    </div>
  );
};

export default Message;
