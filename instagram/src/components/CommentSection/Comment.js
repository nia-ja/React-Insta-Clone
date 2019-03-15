import React from "react";
import './comment.css';
import PropTypes from 'prop-types';


const Comment = (props) => {
    return (
        <div className="comment">
            <p className="comment-text"><span className="comment-username">{props.comment.username}</span>{props.comment.text}</p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;