import React from "react";
import './postContainer.css';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import CommentSection from "../CommentSection/CommentSection";


const PostContainer = (props) => {
    return (
        <div className="post-container">
            <PostHeader src={props.data.thumbnailUrl} alt={`${props.data.username} thumbnail`} username={props.data.username} />
            <img className="post-image" src={props.data.imageUrl} alt={`${props.data.username} post`}/>
            <PostFooter numberOfLikes={props.data.likes} />
            <CommentSection comments={props.data.comments} />
        </div>
    );
}
export default PostContainer;