import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";


class Login extends Component {
  state = {
    book: {},
    email: "",
    password: ""
    
  };

  componentDidMount() {
   
      
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
       
    
     
        <button  >Submit Story</button>


        
        </div>
   
       
      );
    }
  }
  
  export default Login;