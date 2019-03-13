import React from "react";
import './postFooter.css';


const PostFooter = (props) => {
    return (
        <div className="post-footer">
            <div className="footer-icons">
                <img className="footer-icon" src="https://img.icons8.com/ios/30/000000/hearts.png" alt="Heart icon" />
                <img className="footer-icon" src="https://img.icons8.com/ios/25/000000/topic.png" alt="Speach bubble icon" />
            </div>
            {props.numberOfLikes !== 1 ? (<p className="num-of-likes">{props.numberOfLikes} likes</p>) : (<p className="num-of-likes">{props.numberOfLikes} like</p>)}
        </div>
    );
}

export default PostFooter;