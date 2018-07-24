import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import axios from "axios";


class Profile extends Component {
  state = {
    book: {},
    style: {
      display: "none"
    },
    block: {
      display: "block"
    }
  };

  componentDidMount() {
    API.getPerson(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
     
      .catch(err => console.log(err));
    
  }

  loadBooks = () => {
    window.location.reload();
  };

  edit = () => {
    this.setState({
      style: {
        display: "block"
      },
      block: {
        display: "none"
      }
    });

};


submitEdit = () => {
  axios.put("/api/persons/" + this.props.match.params.id, {
    bio: this.state.bio
  })
  .then(response => {
    this.loadBooks();
  })
  .catch(error => {
    console.log(error);
  });

};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });

};
  

  render() {
    return (
      <div>
         <Header 
              houseDems={this.state.book.name} />
        <img className="profileImage" src={this.state.book.image} />
        <div className="quickFacts">
        <h3>Quick Facts</h3>
        <p>Political Party: {this.state.book.party}</p>
        <p>First Year: {this.state.book.firstYear}</p>
        <p>District: {this.state.book.district}  </p>
       

        </div>
        <div className="sidebar">
              <Dropdown />
              </div>
        <div className="bio">
          <h4>Biography</h4>
          <button className="editBio" onClick={this.edit}>Edit</button>
          <p style={this.state.block}>{this.state.book.bio}</p>
        <input className="bioInput" defaultValue={this.state.book.bio} name="bio" onChange={this.handleInputChange} style={this.state.style} type="text" />
        <button onClick={this.submitEdit} style={this.state.style}>Done Editing</button>
          </div>
<div className="profileFooter">
<Footer />
</div>
     </div>
    );
  }
}



export default Profile;