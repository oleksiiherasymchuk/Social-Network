import React from "react";
import s from "./Message.module.css";
import man from "../../../Profile/ProfileInfo/images/man.png";

const Message = React.memo((props) => {
  // console.log("Message", props.message);
  return (
    <div className={s.message}>
      <div className={s.avatar}>
        <img src={man} alt="" />
        {/* props.message.photo |  */}
        <p>{props.message.userName}</p>
      </div>
      <div className={s.messageText}>{props.message.message}</div>
    </div>
  );
});

export default Message;
