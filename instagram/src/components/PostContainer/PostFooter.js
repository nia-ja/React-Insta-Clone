import React from "react";
import './postFooter.css';
import heartIcon from '../../heart_icon.svg';
import speechBubbleIcon from '../../speech_bubble_icon.svg';


const PostFooter = (props) => {
    return (
        <footer className="post-footer">
            <div className="footer-icons">
                <img className="footer-icon footer-heart-icon" src={heartIcon} alt="Heart icon" />
                <img className="footer-icon footer-bubble-icon" src={speechBubbleIcon} alt="Speach bubble icon" />
            </div>
            {props.numberOfLikes !== 1 ? (<p className="num-of-likes">{props.numberOfLikes} likes</p>) : (<p className="num-of-likes">{props.numberOfLikes} like</p>)}
        </footer>
    );
}

export default PostFooter;