import React, { useState, useRef } from "react";
import style from "./comment.module.scss"

export default function Comment({ comment, addReply,CommReplyLoad }) {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const inputEl = useRef(null);

  return (
    <li className={style.commCont} key={comment._id}>
      
     <span className={style.commentusername}>{comment.username}</span> 
      <br/>
      {comment.message}
      <br/>
      {!showReplyBox && (

        <button
          type="button"
          className={style.commbuttons}
      
          onClick={() => {
            setShowReplyBox(true);

            // This is to make the ref available
            setTimeout(() => inputEl.current.focus());
          }}
        >
          reply
        </button>
      )}
     
      {showReplyBox && (
        <>
          <br />
          <textarea  className={style.textComInt}
          placeholder="type your reply"
            ref={inputEl}
            onChange={(e) => {
              setReplyText(e.target.value);
            }}
            type="text"
          />
          <br />
          
          <button
            type="button"
            className={style.commbuttons}
            onClick={() => {
              addReply(comment._id, replyText);
              setShowReplyBox(false);
              setReplyText("");
            }}
          >
            save
          </button>
          <button  className={style.commbuttons}
            type="button"
            onClick={() => {
              setShowReplyBox(false);
              setReplyText("");
            }}
          >
            cancel
          </button>
        </>
      )}
      {comment.children.length > 0 && (
        <ul className={style.reply}>
          {comment.children.map((childComment) => (
            <Comment
              key={childComment.id}
              comment={childComment}
              addReply={addReply}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
