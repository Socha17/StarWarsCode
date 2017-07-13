import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'people',
      search: ''
    };
  }

  handleRadioChange = (e) => {
    this.setState({
      category: e.target.value
    });
  }

  handleTextChange = (e) => {
    this.setState({search: e.target.value});
  }

  searchResults = (e) => {
    e.preventDefault()
    fetch('https://swapi.co/api/' + this.state.category + '/?search=' + this.state.search)
    .then(response => response.json())
    .then((json) => {
      console.log(json)
      this.props.gotResulsts(json)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
    <div>
      <h1>Search</h1>
      <form>
        <input type="text" name="search" placeholder="Search" onChange={this.handleTextChange}/> <br/>
        <input type="radio" name="people" value="people" onChange={this.handleRadioChange} checked={this.state.category === 'people'}/> People
        <input type="radio" name="planets" value="planets" onChange={this.handleRadioChange} checked={this.state.category === 'planets'} /> Planets
        <input type="radio" name="starships" value="starships" onChange={this.handleRadioChange} checked={this.state.category === 'starships'} /> Starships
        <input type="submit" value="Submit" onClick={this.searchResults}/>
      </form>
    </div>
    );
  }
}

export default SearchForm;
