import React from "react";
import './postHeader.css';


const PostHeader = (props) => {
    return (
        <div className="post-header">
            <img src={props.src} alt={props.alt} className="thumbnail" />
            <p className="username">{props.username}</p>
        </div>
    );
}

export default PostHeader;