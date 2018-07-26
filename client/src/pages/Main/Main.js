

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Main extends Component {
  state = {
    style:  {
      display: "none"
    },
    styleTwo: {
      display: "none"
    }
  };

  
  componentDidMount() {
    setTimeout(
      function() {
          this.setState({style: {
            display: "block"
          }});
      }
      .bind(this),
      1500
  );
  setTimeout(
    function() {
        this.setState({styleTwo: {
          display: "block"
        }});
    }
    .bind(this),
    2500
);
 
  }





  


  render() {
  
    return (
     
    
   
      <div>
        
        <Header 
              houseDems="State Watch" />
              
            
              <div className="mainText">
              <h3 >The Citizen Journalists Platform For State Legislatures</h3>
    
       <ul>
                <li style={this.state.style}>Find Information About Any Current State Legislator</li>
                <li style={this.state.styleTwo}>Contribute to Our State Watchers Network by Contributing to Your State's Blog Page</li>
        </ul>
       
     
        </div>
        <iframe className="map" src="https://createaclickablemap.com/map.php?id=72860&maplocation=&online=true" ></iframe>
              <div className="mainDropdown">
              <Dropdown />
              </div>
              <div className="mainFooter">
              <Footer />
              </div>
    </div> 
    );
  }
}

export default Main;



