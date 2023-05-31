import React from "react";
import s from "./Message.module.css";
import man from "../../../Profile/ProfileInfo/images/man.png";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../../redux/dialogsReducer";

const Message = (props) => {

  const dispatch = useDispatch();

  const deleteMessageHandler = (message) => {
    dispatch(deleteMessage(message))
  } 

  return (
    <div className={s.message}>
      <div className={s.messageImg}>
        <img src={man} alt="" />
      </div>
      <div className={s.messageText}>
        <span className={s.messageTextItem}>{props.message}</span>
        <span className={s.messageTextTime}>{props.time}</span>
      </div>
      <div className={s.messageDelete}>
        <span onClick={() => deleteMessageHandler(props.id)}>x</span>
      </div>
    </div>
  );
};

export default Message;
