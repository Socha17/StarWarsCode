import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gotData: false,
      zeroResults: false,
      data: {
        results: []
      }
    }
  }

  componentWillReceiveProps(data) {
    let newState = this.state
    newState.gotData = true;
    newState.data = data.results

    if (data.results.count === 0) {
      newState.zeroResults = true;
    } else {
      newState.zeroResults = false;
    }

    this.setState(newState)
  }


  render() {
    // show no list if no props have been received
    if (!this.state.gotData || this.state.data === '') {
      return ( <div></div> );
    } else {
      // loop through list of names
      let data = this.state.data.results;
      const listItems = data.map((data) =>
      <div key={data.name}>
          <button><Link to={"/details" + data.url.split('http://swapi.co/api')[1]}>{data.name}</Link></button>
      </div>
      );
      return (
        <div>
          <h1>List</h1>
          {this.state.zeroResults ? <div>No Results</div> : listItems}
        </div>
      );
    }


  }
}


export default List;
