import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";


class Submit extends Component {
  state = {
    stateInfo: {},
    author: "",
    text: "",
    state: "",
    title: "",
    likes: "",
    dislikes: ""
  };

  componentDidMount() {
   
    API.getState(this.props.match.params.id)
    .then(res => this.setState({ stateInfo: res.data }))
   
    .catch(err => console.log(err));
    
      
  }


  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveBlog({
        title: this.state.title,
        author: this.state.author,
        text: this.state.text,
        summary: this.state.text.substring(0, 100),
        state: this.state.stateInfo.name,
        likes: 0,
        dislikes: 0,
        popularity: 0,
        votes: 0
      })

      .then(res => this.jump())
      .catch(err => console.log(err));

    
        alert("story submitted");
        
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
 
  };

  jump = () => {
    window.location = "/stateblog/" + this.state.stateInfo._id;
  };



  render() {
 
      return (
        <div>
        <Header 
        houseDems="State Watch" />
           <div className="sidebar submitSidebar">
              <Dropdown />
              </div>
        <div className="submitContainer" style={this.state.image} >
       
          <h2>Write Your Story Here!</h2>
       <p> Title:</p>
       <input className="blue titleInput" onChange={this.handleInputChange} type="text" name="title" />
       
        
        <p>Author:</p>
        <input className="authorInput blue" onChange={this.handleInputChange} type="text" name="author" />
        
       
        <div>
        <p>Text:</p> 
        <input className="blue bodyInput" onChange={this.handleInputChange} type="text" name="text"  />
        </div>
     
        <button className="submitButton" onClick={this.handleFormSubmit} >Submit Story</button>


        
        </div>
        <div className="mobileDropdown">
        <Dropdown />
        </div>
        <Footer />
        </div>
       
      );
    }
  }
  
  export default Submit;