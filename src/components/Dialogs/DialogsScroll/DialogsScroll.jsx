import React from "react";
import s from "./DialogsScroll.module.css";
import DialogItem from "./DialogItem/DialogItem";

const DialogsScroll = () => {
  const dialogsItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className={s.dialogsScroll}>
      {dialogsItems.map((di, index) => (
        <DialogItem key={index} />
      ))}
    </div>
  );
};

export default DialogsScroll;
