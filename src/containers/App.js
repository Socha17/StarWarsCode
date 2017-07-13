import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';

// Application Components
import SearchForm from '../components/SearchForm.js'
import List from '../components/List.js'
import Details from '../components/Details.js'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: '',
      details: ''
    };
  }

 gotResulsts = (results) => {
   this.setState({searchResults: results})
 }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          {/* <SearchForm gotResulsts={this.gotResulsts}/> */}
          {/* <List results={this.state.searchResults}/> */}
          <Route exact path="/" render={() => <SearchForm gotResulsts={this.gotResulsts}/>}/>
          <Route exact path="/" render={() => <List results={this.state.searchResults}/>}/>
          <Route path="/details/:category/:num" component={Details}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
