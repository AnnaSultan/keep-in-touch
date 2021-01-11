import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={s.friend_img_holder}>
      <img
        className={s.content_header_img}
        src="https://i.imgur.com/vYzFO6P.jpg"
        alt="image"
      />
      <p>Name</p>
    </div>
  );
};

export default Sidebar;
