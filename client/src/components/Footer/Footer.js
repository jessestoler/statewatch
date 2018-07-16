import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
  state = {
   
    states: []
     };

  componentDidMount() { }



  render() {
    return (
      <div id="footer" >
    <p>App Developed by Jesse Stoler</p>
      </div>
    );
  }
}

export default Footer;