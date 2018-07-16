import React, { Component } from 'react';
import "./sidebar.css";
import Graph from "../Graph";

class Sidebar extends Component {
  state = {
    houseDems: 36,
    houseGOP: 29,
    houseOther: 0,
    senateDems: 16,
    senateGOP: 18,
    senateOther: 1
     };

  componentDidMount() { }
  render() {
    return (
      <div className="row">
       <div className="house col-3">
       <h4>House Breakdown</h4>
       <p>Democrats: {this.state.houseDems}</p>
       <p>Other: {this.state.houseOther}</p>
       <p>Republicans: {this.state.houseGOP}</p>
       <Graph />
       <p>Speaker of the House: Crisanta Duran</p>
       <p>Majority Leader:</p>
       <p>Minority Leader:</p>
       <h4>View Upcoming Legislation</h4>
       </div>
       <div className="main col-6">
       <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg" /> 
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Coloradocapitolhill2.JPG/1200px-Coloradocapitolhill2.JPG" />
       
            </div>
       <div className="senate col-3">
       <h4>Senate Breakdown</h4>
       <p>Democrats: {this.state.senateDems}</p>
       <p>Other: {this.state.senateOther}</p>
       <p>Republicans: {this.state.senateGOP}</p>
       <Graph />
       <p>Speaker of the House: Crisanta Duran</p>
       <p>Majority Leader:</p>
       <p>Minority Leader:</p>
       <h4>View Upcoming Legislation</h4>
       </div>
      </div>
    );
  }
}

export default Sidebar;