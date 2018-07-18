import React, { Component } from 'react';

class Footer extends Component {
  state = {
   
    states: []
     };

  componentDidMount() { }



  render() {
    return (
      <div className="footer" >
    <p>App Developed by Jesse Stoler</p>
      </div>
    );
  }
}

export default Footer;