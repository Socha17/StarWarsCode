import React, { Component } from 'react';
import '../App.css';
import SearchForm from '../components/SearchForm.js'
import List from '../components/List.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: ''
    };
  }


 gotResulsts = (results) => {
   this.setState({searchResults: results})
 }

  render() {

    return (
      <div className="App">
        <SearchForm gotResulsts={this.gotResulsts}/>
        <List results={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;
