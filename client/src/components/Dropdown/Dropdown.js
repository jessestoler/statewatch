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
  
  refresh = () => {
    window.location.reload();
  };
  

  render() {

   
   
  


    return (
      <div >
        <div>
    <p className="dropdownText" >Select State</p>
    <button className="dropdownButton" onClick={this.showList} >&#9660;</button> 
    </div>
     
      <ul className="dropdown" style={this.state.style}>
      {this.state.books.map(a => (
          <Link to={"/" + a._id}>  <li onClick={this.refresh} className="dropdownItems">{a.name}</li>
           </Link>
          ))}
      </ul>
      </div>
    );
  }
}

export default Dropdown;