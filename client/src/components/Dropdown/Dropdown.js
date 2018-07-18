import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Dropdown extends Component {
  state = {
    books: [],
    states: [],
    style: {
      display: "none"
    }
     };

  componentDidMount() { this.loadBooks() }

  loadBooks = () => {
    API.getStates()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  showList = () => {
    this.setState({
      style: {
        display: "block"
      }
    });

  };
  
  

  /*list = () => {
     
    this.setState({
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
   "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      });
    
  if (this.state.states[0] == "Alabama") {
    this.setState({
        states: []
      });
  }

  };*/

  

  render() {

   
   
  


    return (
      <div >
    <p>Select State</p>
     <button onClick={this.showList} >&#9660;</button> 
      <ul className="dropdown" style={this.state.style}>
      {this.state.books.map(a => (
          <Link to={"/" + a._id}>  <li className="dropdownItems">{a.name}</li>
           </Link>
          ))}
      </ul>
      </div>
    );
  }
}

export default Dropdown;