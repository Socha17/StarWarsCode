import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';

// Application Components
import SearchForm from '../components/SearchForm.js'
import List from '../components/List.js'
import Details from '../components/Details.js'

class App extends Component {
  // state to keep track of searchResults
  constructor(props) {
    super(props);
    this.state = {
      searchResults: ''
    };
  }
  // passes searched results to state
 gotResulsts = (results) => {
   this.setState({searchResults: results})
 }
 
  render() {
    // BrowserRouter for routing, only shows SearchForm and List when the exact path is met
    return (
      <BrowserRouter>
        <div className="App row">
          <section className="col s12 m12 l6 seachSection">
            <Route exact path="/" render={() => <SearchForm gotResulsts={this.gotResulsts}/>}/>
          </section>

          <section className="col s12 m12 l6 ListSection">
            <Route exact path="/" render={() => <List results={this.state.searchResults}/>}/>
          </section>
          <Route path="/details/:category/:num" component={Details}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
