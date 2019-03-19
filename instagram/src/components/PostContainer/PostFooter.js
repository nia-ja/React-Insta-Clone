import React from 'react';
import './postFooter.css';
import heartIcon from '../../heart_icon.svg';
import speechBubbleIcon from '../../speech_bubble_icon.svg';

class PostFooter extends React.Component {
    constructor(props) {
        super();
        this.state = {
          likes: props.likes,
        }
        this.origState = this.state.likes;
    }
    heartClicked = () => {
        if(this.state.likes !== this.origState) {
            this.setState({likes: this.state.likes - 1});
        } else {
            this.setState({likes: this.state.likes + 1});
        }
    }
    render(props) {
        return (
            <footer className="post-footer">
                <div className="footer-icons">
                    <img className="footer-heart-icon" src={heartIcon} alt="Heart icon" onClick={this.heartClicked}/>
                    <img className="footer-icon footer-bubble-icon" src={speechBubbleIcon} alt="Speach bubble icon" />
                </div>
                {this.state.likes !== 1 ? (<p className="num-of-likes">{this.state.likes} likes</p>) : (<p className="num-of-likes">{this.state.likes} like</p>)}
            </footer>
        );
    }

}

export default PostFooter;