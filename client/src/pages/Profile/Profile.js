import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { List, ListItem } from "../../components/List";


class Profile extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    API.getSenator(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
     
      .catch(err => console.log(err));
    
  }

  

  render() {
    return (
      <div>
         <Header 
              houseDems={this.state.book.name} />
        <img src={this.state.book.image} />
        <div className="quickFacts">
        <h3>Quick Facts</h3>
        <p>Political Party: {this.state.book.party}</p>
        <p>First Year: {this.state.book.firstYear}</p>
        <p>District: </p>
       

        </div>
        <div className="bio">
          <h4>Biography</h4>
          <p>Across the centuries stirred by starlight. Consciousness galaxies inconspicuous motes of rock and gas realm of the galaxies hydrogen atoms how far away! Hypatia vastness is bearable only through love, Vangelis, bits of moving fluff? Shores of the cosmic ocean? Culture rich in heavy atoms citizens of distant epochs Flatland, take root and flourish! Star stuff harvesting star light explorations hearts of the stars the carbon in our apple pies rings of Uranus extraplanetary billions upon billions and billions upon billions upon billions upon billions upon billions upon billions upon billions!</p>
          </div>

     </div>
    );
  }
}



export default Profile;