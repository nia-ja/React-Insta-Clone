import React from "react";
import './commentSection.css';
import Comment from './Comment';
import moment from 'moment';


const CommentSection = (props) => {
    const date = new Date();
    const time = moment(date).startOf('seconds').fromNow().toUpperCase();
    return (
        <div className="comment-section">
            {props.comments.map((comment, index) => (<Comment key={index} comment={comment} />))}
            <p className="timestamp">{time}</p>
            <input className="add-comment-input" type="text" name="addComment" placeholder="   Add a comment..." />
        </div>
    );
}

export default CommentSection;