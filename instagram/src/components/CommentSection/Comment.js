import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentWrapper = styled.div `
    width: 100%;
    padding: 10px 2%;
`;
const CommentUsername = styled.span `
    font-weight: bold;
    margin-right: .6%;
`;

const Comment = (props) => {
    return (
        <CommentWrapper>
            <p><CommentUsername>{props.comment.username}</CommentUsername>{props.comment.text}</p>
        </CommentWrapper>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;