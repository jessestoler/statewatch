import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";


class Submit extends Component {
  state = {
    book: {},
    author: "",
    text: "",
    state: "",
    title: "",
    likes: "",
    dislikes: ""
  };

  componentDidMount() {
   
    API.getState(this.props.match.params.id)
    .then(res => this.setState({ book: res.data }))
   
    .catch(err => console.log(err));
    
      
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveBlog({
        title: this.state.title,
        author: this.state.author,
        text: this.state.text,
        summary: this.state.text.substring(0, 100),
        state: this.state.book.name,
        likes: 0,
        dislikes: 0,
        popularity: 0,
        votes: 0
      })

      .then(res => this.loadBooks())
      .catch(err => console.log(err));

    
        alert("story submitted");
        
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
 
  };

  loadBooks = () => {
    window.location = "/stateblog/" + this.state.book._id;
  };



  render() {
 
      return (
        <div>
        <Header 
        houseDems="State Watch" />
           <div className="sidebar submitSidebar">
              <Dropdown />
              </div>
        <div className="submitContainer" >
       
          <h2>Write Your Story Here!</h2>
       <div >
        Title:<br /> <input className="blue titleInput" onChange={this.handleInputChange} type="text" name="title" />
        </div>
        <div >
        Author:<br /> <input className="authorInput blue" onChange={this.handleInputChange} type="text" name="author" />
        </div>
       
        <div>
        Text: <br /> <input className="blue bodyInput" onChange={this.handleInputChange} type="text" name="text"  />
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