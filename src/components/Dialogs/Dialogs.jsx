import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink className={s.dialog} activeClassName={s.active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogData = [
    { id: 1, name: "Nurzhan" },
    { id: 2, name: "Aliya" },
    { id: 3, name: "Aygerim" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Ella" },
    { id: 6, name: "Asli" },
    { id: 7, name: "Asiye" },
  ];

  let dialogsElements = [
    <DialogItem name={dialogData[0].name} id={dialogData[0].id} />,
    <DialogItem name={dialogData[1].name} id={dialogData[1].id} />,
    <DialogItem name={dialogData[2].name} id={dialogData[2].id} />,
    <DialogItem name={dialogData[3].name} id={dialogData[3].id} />,
    <DialogItem name={dialogData[4].name} id={dialogData[4].id} />,
    <DialogItem name={dialogData[5].name} id={dialogData[5].id} />,
    <DialogItem name={dialogData[6].name} id={dialogData[6].id} />,
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r you" },
    { id: 3, message: "Good, u?" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Tratata" },
    { id: 6, message: "Lalala" },
    { id: 7, message: "Ahaha" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
        <Message message={messagesData[3].message} id={messagesData[3].id} />
        <Message message={messagesData[4].message} id={messagesData[4].id} />
        <Message message={messagesData[5].message} id={messagesData[5].id} />
      </div>
    </div>
  );
};

export default Dialogs;
