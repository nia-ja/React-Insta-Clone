import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 3000);
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.length > 0 ? (
          this.state.data.map(elem => (<PostContainer data={elem} key={`${elem.timestamp}${elem.username}`} />))
        ) : (
          <div class="semipolar-spinner">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
