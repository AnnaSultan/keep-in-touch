import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://miro.medium.com/max/512/1*3IdVhB62IBQhXHIJTbNeVg.png"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like </span>
        {props.likeCount}
      </div>
    </div>
  );
};

export default Post;
