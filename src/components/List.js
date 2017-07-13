import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gotData: false,
      data: {
        results: []
      }
    }
  }

  componentWillReceiveProps(data) {
    let newState = this.state
    newState.gotData = true;
    newState.data = data.results
    this.setState(newState)
  }

  componentWillUnmount() {
    console.log("unmounting");
    let newState = this.state
    newState.gotData = false;
    this.setState(newState)
  }

  render() {

    if (!this.state.gotData || this.state.data === '') {
      return ( <div></div> );
    } else {
      let data = this.state.data.results;
      const listItems = data.map((data) =>
      <div key={data.name}>
          <button><Link to={"/details" + data.url.split('http://swapi.co/api')[1]}>{data.name}</Link></button>
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
