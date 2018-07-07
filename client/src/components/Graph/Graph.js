import React, { Component } from 'react';
import "./graph.css";

class Graph extends Component {
  state = {
    houseDems: 36,
    houseOther: 0,
    houseGOP: 29
    
    
    
  };

  componentDidMount() { }





  render() {
  
    function Fuck(props) {
        
        return <div>{props.math}</div>;
    }
    
  
  
    return (
      <div id="sunshine" >
       
       <Fuck math={this.state.houseGOP + this.state.houseDems + this.state.houseOther} /> 
      </div>
    );
  }
}

export default Graph;