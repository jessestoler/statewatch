import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Amendments extends Component {
  state = {
    books: [],
  
    style: {
      display: "none"
    },
    styleTwo: {
      display: "block"
    }
     };

  componentDidMount() { this.loadBooks();  }

  loadBooks = () => {
    API.getStates()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));


  };

  showList = () => {
 
    {this.state.style.display === "none"?  this.setState({
      style: {
        display: "block"
      },
      styleTwo: {
        display: "none"
      }
    }) :  this.setState({
      style: {
        display: "none"
      },
      styleTwo: {
        display: "block"
      }
    })} 

    

  };


  
  refresh = () => {
    window.location.reload();
  };
  

  render() {

    const Cards = props => (
        <div className="cards" style={props.party === "Democrat" ? blue : red}>
         
                
                    <p>{props.name}</p>  
                    <p>{props.firstYear}</p>
                    <img src={props.image} />
                    <p>{props.party}</p>
                    <p>{props.district}</p>
                    
                   
                
           
        </div>
    );
   
  


    return (
      <div >
        <div>
    
    <button className="dropdownButton" onClick={this.showList} >&#9660;</button> 
    <p className="dropdownText" style={this.state.styleTwo} >Select State</p>
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

export default Amendments;