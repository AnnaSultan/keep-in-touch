import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Nurzhan" },
    { id: 2, name: "Aliya" },
    { id: 3, name: "Aygerim" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Ella" },
    { id: 6, name: "Asli" },
    { id: 7, name: "Asiye" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r you" },
    { id: 3, message: "Good, u?" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Tratata" },
    { id: 6, message: "Lalala" },
    { id: 7, message: "Ahaha" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
