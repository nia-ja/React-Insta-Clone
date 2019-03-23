import React from "react";
import styled from 'styled-components';

const PostHeaderWrapper = styled.header `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 2%;
`;
const PostHeaderThumbnail = styled.img `
    width: 5%;
    border-radius: 50%;
    margin-right: 1%;
`;
const PostHeaderUsername = styled.p `
    font-weight: bold;
`;



const PostHeader = (props) => {
    return (
        <PostHeaderWrapper>
            <PostHeaderThumbnail src={props.src} alt={props.alt} />
            <PostHeaderUsername>{props.username}</PostHeaderUsername>
        </PostHeaderWrapper>
    );
}

export default PostHeader;