import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";


class Signup extends Component {
  state = {
    book: {},
    email: "",
    password: "",
    username: "",
    state: ""
    
  };

  componentDidMount() {
   
      
  }

 /* handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveUser({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        state: this.state.state
     
      })

      .then(res => this.loadBooks())
      .catch(err => console.log(err));

    
        
  };*/


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
 console.log(this.state.password);
  };

  loadBooks = () => {
    window.location = "/";
  }; 



  render() {
 
      return (
        <div>
      
       <div >
        Email:<br /> <input onChange={this.handleInputChange} type="text" name="email" />
        </div>
        <div >
        Password:<br /> <input onChange={this.handleInputChange} type="text" name="password" />
        </div>
       
        <div>
        Username: <br /> <input onChange={this.handleInputChange} type="text" name="username"  />
        </div>

            <div>
        State: <br /> <input onChange={this.handleInputChange} type="text" name="state"  />
        </div>
     
      {/*  <button onClick={this.handleFormSubmit} >Submit Story</button> */}


        
        </div>
   
       
      );
    }
  }
  
  export default Signup;