import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gotData: false,
      data: []
    }
  }
// gets data from url
getData = () => {
  fetch('https://swapi.co/api/' + this.props.match.params.category + "/" + this.props.match.params.num)
  .then(response => response.json())
  .then((json) => {
    this.setState({
      gotData: true,
      data:json
    })
  })
  .catch(error => console.log(error))
}

componentDidMount() {
  this.getData()
}

  render() {
      // if received data display it
    if (this.state.gotData) {
      let keys = Object.keys(this.state.data)
      let values = Object.values(this.state.data)
      // map over keys and match values to appropriate key
      let itemDetails = keys.map((titles, i) =>
         <div key={titles} className="details">
           <span>{titles}: </span>
           <span> { values[i] } </span>
         </div>
      )
      return (
        <div className="detailSection col s12 m12 l12 slide left-align">
        <div className="backBtn"><Link to="/">Back</Link></div>
          <h1 className="detailsTitle">Details</h1>
          {itemDetails}
        </div>
      );
    } else {
      // if havent received data yet display loading
      return (
        <div className="detailSection col s12 m12 l12 slide left-align">
        <div className="backBtn"><Link to="/">Back</Link></div>
          <h1 className="detailsTitle">Details</h1>
        </div>
      );
    }
  }
}

export default Details;
