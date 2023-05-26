import React, { useState } from "react";
import s from "./AddMessageFrom.module.css";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../redux/dialogsReducer";

const AddMessageForm = () => {
  const dispatch = useDispatch();
  const [messageValue, setMessageValue] = useState("");

  const sendMessageHandler = () => {
    if (messageValue) {
      dispatch(sendMessage(messageValue));
      setMessageValue("");
    } else {
      alert("You can't send an empty message");
    }
  };

  const onMessageChange = (e) => {
    setMessageValue(e.target.value);
  };

  return (
    <div className={s.addMessageForm}>
      {" "}
      <textarea
        placeholder="Type your message..."
        value={messageValue}
        onChange={onMessageChange}
      />
      <button onClick={sendMessageHandler}>Send</button>
    </div>
  );
};

export default AddMessageForm;
