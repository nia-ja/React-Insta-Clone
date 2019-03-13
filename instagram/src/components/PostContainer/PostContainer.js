import React from "react";
import './postContainer.css';
import PostHeader from './PostHeader';



const PostContainer = (props) => {
    console.log(props)
    return (
        <div className="post-container">
            <PostHeader src={props.data.thumbnailUrl} alt="`${props.data.username} thumbnail`" username={props.data.username} />
            {/* <Image / >
            <Footer />
            <Comments /> */}
        </div>
    );
}
export default PostContainer;