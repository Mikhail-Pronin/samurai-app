import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" />
      {props.message}
      <div>
        <span>Like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;