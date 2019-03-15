import React from "react";
import './postContainer.css';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from 'prop-types';


const PostContainer = (props) => {
    return (
        <div className="post-container">
            <PostHeader src={props.data.thumbnailUrl} alt={`${props.data.username} thumbnail`} username={props.data.username} />
            <img className="post-image" src={props.data.imageUrl} alt={`${props.data.username} post`}/>
            <PostFooter numberOfLikes={props.data.likes} />
            <CommentSection comments={props.data.comments} date={props.data.timestamp} />
        </div>
    );
}

PostContainer.propTypes = {
    data: PropTypes.shape ({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
}

export default PostContainer;