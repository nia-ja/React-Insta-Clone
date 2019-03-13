import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(elem => (<PostContainer data={elem} key={`${elem.timestamp}${elem.username}`} />))}
      </div>
    );
  }
}

export default App;
