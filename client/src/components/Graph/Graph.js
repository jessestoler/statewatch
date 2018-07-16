import React, { Component } from 'react';
import "./graph.css";
import { Chart } from 'react-google-charts';

class Graph extends Component {
  state = {
   
    
    
  };

  componentDidMount() { }





  render() {
  
    


  
  
    return (
      <div className={'my-pretty-chart-container'}>
      <Chart
        chartType="PieChart"
        data={[['Task', 'Hours per Day'],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]]}
        options={{"title":"My Daily Activities","pieHole":0.4,"is3D":true}}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
    );
  }
}

export default Graph;

/*import React, { Component } from 'react';
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

export default Graph;*/