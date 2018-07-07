import React, { Component } from 'react';
import "./sidebar.css";
import Graph from "../Graph";

class Sidebar extends Component {
  state = {
    houseDems: 36,
    houseOther: 0,
    houseGOP: 29
    
    
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
       </div>
       <div className="main col-6">
       <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg" /> 
       
       
            </div>
       <div className="senate col-3">
       <h4>Senate Breakdown</h4>
       </div>
      </div>
    );
  }
}

export default Sidebar;