import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

class Details extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

getData = () => {
  fetch('https://swapi.co/api/' + this.props.match.params.category + "/" + this.props.match.params.num)
  .then(response => response.json())
  .then((json) => {
    console.log(json)
    this.setState(json)
  })
  .catch(error => console.log(error))
}

componentDidMount() {
  console.log("mounted");
  console.log(this.props.match.params.category);
  this.getData()
}

componentWillUnmount() {
  console.log("unmounting detail");
}

  render() {
      return (
        <div>
        <Link to="/">Back</Link>
          <h1>Details</h1>
        </div>
      );
  }
}

export default Details;
