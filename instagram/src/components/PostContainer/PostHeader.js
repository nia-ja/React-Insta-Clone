import React from "react";
import './postHeader.css';


const PostHeader = (props) => {
    return (
        <header className="post-header">
            <img src={props.src} alt={props.alt} className="thumbnail" />
            <p className="username">{props.username}</p>
        </header>
    );
}

export default PostHeader;