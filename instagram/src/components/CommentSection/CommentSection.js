import React from "react";
import Comment from './Comment';
import moment from 'moment';
import styled from 'styled-components';

const CommentSectionWrapper = styled.div `
    width: 100%;
    padding: 5px 0 0 0;
`;
const Timestamp = styled.p `
    width: 100%;
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    color: rgb(105, 105, 105);
    padding-left: 2%;
`;
const AddCommentInput = styled.input `
    width: 100%;
    margin-top: 15px;
    padding: 20px;
    border: none;
    border-top: 1px solid lightgray;
    font-size: 1.6rem;
    background: url(https://randomuser.me/api/portraits/lego/8.jpg) no-repeat scroll 7px 7px;
    background-size: 5%;
    background-position-y: center;
    padding-left: 50px;
    &:focus {
        outline: none;
    }
`;


class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
          comments: props.comments,
          addComment: '',
          time: ''
        }
    }
    onChange = (e)  => {
        this.setState(
            {[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.addComment !== "") {
            this.addNewComment(this.state.addComment);
        }
        e.target.reset();
    }

    addNewComment = (comment) => {
        const newComment = {
            username: this.props.user,
            text: comment
        }
        this.setState({comments: [...this.state.comments, newComment]});
    }
    
    componentDidMount() {
        const date = this.props.date;
        // new Date();
        const time = moment(date, "MMMM Do YYYY, hh:mm:ss a ").startOf('seconds').fromNow().toUpperCase();
        this.setState({time: time});
    }
    render(props) {
        return (
            <CommentSectionWrapper>
                {this.state.comments.map((comment, index) => (<Comment key={index} comment={comment} />))}
                <Timestamp>{this.state.time}</Timestamp>
                <form onSubmit={this.onSubmit}>
                    <AddCommentInput name="addComment" placeholder="Add a comment..." onChange={this.onChange} />
                </form>
            </CommentSectionWrapper>
        );
    }
}

export default CommentSection;