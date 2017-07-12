import React, { Component } from 'react';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gotData: false,
    }
  }

  componentWillReceiveProps(results) {
    let newState = this.state
    newState.gotData = true;
    newState = results
    this.setState(newState)
  }

  render() {

    if (!this.state.gotData) {
      return ( <div></div> );
    } else {
      const listItems = this.state.results.results.map((results) =>
      <div key={results.name}>
        <a href={results.url}>
          <span>{results.name}</span>
        </a>
      </div>
      );
      return (
      <div>
        <h1>List</h1>
        {listItems}
      </div>
      );
    }


  }
}

export default List;
