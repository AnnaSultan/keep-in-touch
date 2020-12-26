import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.header_img_holder}>
        <img
          className={s.content_header_img}
          src="https://i.imgur.com/vYzFO6P.jpg"
          alt="image"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          className={s.profile_img}
          src="https://miro.medium.com/max/512/1*3IdVhB62IBQhXHIJTbNeVg.png"
          alt="avatar"
        />
        <p className={s.description}>
          Description Description Description Description Description
          Description Description Description Description Description
          Description
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
