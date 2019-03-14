import React from "react";
import './commentSection.css';
import Comment from './Comment';


const CommentSection = (props) => {
    return (
        <div className="comment-section">
            {props.comments.map((comment, index) => (<Comment key={index} comment={comment} />))}
            <input className="add-comment-input" type="text" name="addComment" placeholder="   Add a comment..." />
        </div>
    );
}

export default CommentSection;