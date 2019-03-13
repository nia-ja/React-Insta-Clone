import React from "react";
import './comment.css';

const Comment = (props) => {
    return (
        <div className="comment">
            <p className="comment-username">{props.comment.username}</p>
            <p className="comment-text">{props.comment.text}</p>
        </div>
    );
}

export default Comment;