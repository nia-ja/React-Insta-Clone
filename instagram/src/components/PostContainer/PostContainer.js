import React from "react";
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const PostWrapper = styled.div `
    max-width: 600px;
    margin: 20px auto;
    border: 1px solid lightgrey;
    background: white;
    @media (max-width: 650px) {
        .post-container {
            margin: 20px 4%; 
        }
    }
`;

const PostImage = styled.img `
    width: 100%;
`;

const PostContainer = (props) => {
    return (
        <PostWrapper>
            <PostHeader src={props.data.thumbnailUrl} alt={`${props.data.username} thumbnail`} username={props.data.username} />
            <PostImage src={props.data.imageUrl} alt={`${props.data.username} post`} />
            <PostFooter likes={props.data.likes} />
            <CommentSection comments={props.data.comments} date={props.data.timestamp} />
        </PostWrapper>
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