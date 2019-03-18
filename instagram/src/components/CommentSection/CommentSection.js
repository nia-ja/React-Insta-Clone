import React from "react";
import './commentSection.css';
import Comment from './Comment';
import moment from 'moment';


class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
          comments: props.comments,
          addComment: '',
          time: ''
        }
        console.log(this.state.comments);
    }
    addNewComment = (comment) => {
        const newComment = {
            username: "kasia_bondarava",
            text: comment
        }
        this.setState({comments: [...this.state.comments, newComment]});
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.addComment !== "") {
            this.addNewComment(this.state.addComment);
        }
        this.setState({addComment: ''});
    }
    onChange = (e)  => {
        this.setState(
            {[e.target.name]: e.target.value})
    }
    componentDidMount() {
        const date = new Date();
        const time = moment(date).startOf('seconds').fromNow().toUpperCase();
        this.setState({time: time});
    }
    render(props) {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, index) => (<Comment key={index} comment={comment} />))}
                <p className="timestamp">{this.state.time}</p>
                <form onSubmit={this.onSubmit}>
                    <input className="add-comment-input" type="text" name="addComment" placeholder="Add a comment..." onChange={this.onChange} />
                </form>
            </div>
        );
    }
}

export default CommentSection;