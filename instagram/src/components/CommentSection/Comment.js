import React from "react";
import './comment.css';

const Comment = (props) => {
    return (
        <div className="comment">
            <p className="comment-text"><span className="comment-username">{props.comment.username}</span>{props.comment.text}</p>
        </div>
    );
}

export default Comment;