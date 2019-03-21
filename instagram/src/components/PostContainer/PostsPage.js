import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filterValue: ''
        }
        this.filterUpdate = this.filterUpdate.bind(this);
    }
    componentDidMount() {
    setTimeout(() => {
        this.setState({ data: dummyData });
    }, 3000);
    }
    filterUpdate(inputValue) {
    const newValue = inputValue;
    this.setState({filterValue: newValue});
    }
    render(props) {
        return (
            <div className="posts-page">
                <SearchBar array={this.state.data.map(elem => elem.username)} filterUpdate={this.filterUpdate} />
                {this.state.data.length > 0 ? (
                    this.state.data
                    .filter(elem => (elem.username.toLowerCase().indexOf(this.state.filterValue.toLowerCase()) >= 0))
                    .map(elem => (<PostContainer data={elem} key={`${elem.timestamp}${elem.username}`} />))
                ) : (
                    // Spinner
                    <div className="semipolar-spinner">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    </div>
                )}
            </div>

        )
    }
}

export default PostsPage;