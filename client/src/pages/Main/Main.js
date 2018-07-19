

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Main extends Component {
  state = {
  };

  
  componentDidMount() {
   
 
  }




  


  render() {
    return (
      <div>
        
        <Header 
              houseDems="State Watch" />
              
            
              
              <h3 className="mainText">The Citizen Journalists Platform For State Legislatures</h3>
              
              <iframe className="map" src="https://createaclickablemap.com/map.php?&id=72603&maplocation=false&online=true" ></iframe>
              <div className="mainDropdown">
              <Dropdown />
              </div>
              <Footer />
 </div>
    );
  }
}

export default Main;



