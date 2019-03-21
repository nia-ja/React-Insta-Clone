import React from 'react';
import heartIcon from '../../heart_icon.svg';
import speechBubbleIcon from '../../speech_bubble_icon.svg';
import styled from 'styled-components';

const PostFooterIconsWrapper = styled.div `
    width: 100%;
    padding: 10px 1.5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const NumberOfLikes = styled.p `
    padding-left: 2%;
    font-weight: bold;
    margin-right: 1%;
`;
const FooterIcon = styled.img `
    opacity: 2;
    margin-right: 2%;
    cursor: pointer;
    height: 35px;
    ${props => (props.type === 'heart' ? `height: 29px` : null)}
    ${props => (props.type === 'bubble' ? `height: 25px; transform: scaleX(-1)` : null)}
`;

class PostFooter extends React.Component {
    constructor(props) {
        super();
        this.state = {
          likes: props.likes,
        }
        this.origState = this.state.likes;
    }
    heartClicked = (e) => {
        if(this.state.likes !== this.origState) {
            this.setState({likes: this.state.likes - 1});
        } else {
            this.setState({likes: this.state.likes + 1});
        }
    }
    render(props) {
        return (
            <footer>
                <PostFooterIconsWrapper>
                    <FooterIcon type='heart' src={heartIcon} alt="Heart icon" onClick={this.heartClicked}/>
                    <FooterIcon type='bubble' src={speechBubbleIcon} alt="Speach bubble icon" />
                </PostFooterIconsWrapper>
                {this.state.likes !== 1 ? (<NumberOfLikes>{this.state.likes} likes</NumberOfLikes>) : (<NumberOfLikes>{this.state.likes} like</NumberOfLikes>)}
            </footer>
        );
    }

}

export default PostFooter;