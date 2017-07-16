import React, { Component } from 'react';


class SearchForm extends Component {
  // keeps track of category selected and search params entered
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

  // gets search results
  searchResults = (e) => {
    e.preventDefault()
    fetch('https://swapi.co/api/' + this.state.category + '/?search=' + this.state.search)
    .then(response => response.json())
    .then((json) => {
      this.props.gotResulsts(json)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
    <div className="searchForm">
      <i className="medium material-icons">search</i>
      <h1>Search</h1>
      <form className="">
        <input type="text" name="search" placeholder="C-3PO" className="col s12 m12 l12" onChange={this.handleTextChange}/> <br/>
        <div className="radioBtns col l7.5 m8 s12">
        <input id="people" type="radio" name="people" value="people" onChange={this.handleRadioChange} checked={this.state.category === 'people'}/>  <label htmlFor="people">People</label>
        <input id="planets" type="radio" name="planets" value="planets" onChange={this.handleRadioChange} checked={this.state.category === 'planets'} /> <label htmlFor="planets">Planets</label>
        <input id="starships" type="radio" name="starships" value="starships" onChange={this.handleRadioChange} checked={this.state.category === 'starships'} /> <label htmlFor="starships">Starships</label>
        </div>
        <button type="submit" className="subBtn right col s12 m3 l3" onClick={this.searchResults}><i className="searchIcon tiny material-icons">search</i><span>Search</span></button>
      </form>
    </div>
    );
  }
}

export default SearchForm;
