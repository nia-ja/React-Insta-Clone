import React from "react";
import './commentSection.css';
import Comment from './Comment';
import moment from 'moment';


class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
          comments: props.comments,
          comment: ''
        }
        console.log(this.state.comments);
    }
    addNewComment(event, index) {
        event.preventDefault();


    }

    // const date = new Date();
    // const time = moment(date).startOf('seconds').fromNow().toUpperCase();
    render(props) {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, index) => (<Comment key={index} comment={comment} />))}
                {/* <p className="timestamp">{time}</p> */}
                <form onSubmit={this.addNewComment}>
                    <input className="add-comment-input" type="text" name="addComment" placeholder="Add a comment..." />
                </form>
            </div>
        );
    }
}

export default CommentSection;