import React from "react";
import s from "./AddChatMessageForm.module.css"

const AddChatMessageForm = () => {
  return (
    <div className={s.addChatMessageForm}>
      {" "}
      <textarea placeholder="Type your message"></textarea>
      <button>Send</button>
    </div>
  );
};

export default AddChatMessageForm;
