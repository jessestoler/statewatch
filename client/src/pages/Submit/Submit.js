import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

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
        state: this.state.book.name,
        likes: 0,
        dislikes: 0
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
        <div >
       <div className="titleInput">
        Title: <input onChange={this.handleInputChange} type="text" name="title" />
        </div>
        <div className="authorInput">
        Author: <input onChange={this.handleInputChange} type="text" name="author" />
        </div>
       
        <div className="bodyInput">
        Text: <input onChange={this.handleInputChange} type="text" name="text"  />
         <button className="submitButton" onClick={this.handleFormSubmit} >Submit Story</button>
        </div>
     


        
        </div>
       
      );
    }
  }
  
  export default Submit;