import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import { Chart } from 'react-google-charts';
import Footer from "../../components/Footer";

class State extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    API.getState(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
     
      .catch(err => console.log(err));

      
  }



  render() {
      return (
        <div className="row">
        <Header
              houseDems={this.state.book.name} />
        
         <div className="house col-3">
         <h4 className="breakdown">House Breakdown</h4>
         <p>Democrats: {this.state.book.houseDems}</p>
         <p>Other: {this.state.book.houseOther}</p>
         <p>Republicans: {this.state.book.houseGOP}</p>
         <p>Speaker of the House: {this.state.book.speaker}</p>
         <p>Majority Leader: {this.state.book.houseMajority}</p>
         <p>Minority Leader: {this.state.book.houseMinority}</p>
         <Link to={"/reps/" + this.state.book._id}>  <li>Find a Representative!</li>
           </Link>
        
       
           <Chart
        chartType="PieChart"
        data={[['Task', 'Hours per Day'],["Democrats", this.state.book.houseDems],["Other", this.state.book.houseOther],["Republicans", this.state.book.houseGOP]]}
        options={{"title":"Party Breakdown","pieHole":0.4,"is3D":true, "colors": ["blue", "gray", "red"]}}
        graph_id="ScatterChart"
        width="100%"
        height="100px"
        legend_toggle
      />
       <h4>View Upcoming Legislation</h4>
         </div>
         <div className="stateMain col-6">
         <img src={this.state.book.flag} /> <br />
         <div className="stateDropdown">
         <Dropdown />
         </div>
         <img className="building" src={this.state.book.mainImage} />
         
              </div>
              <div className="senate col-3">
         <h4 className="breakdown">Senate Breakdown</h4>
         <p>Democrats: {this.state.book.senateDems}</p>
         <p>Other: {this.state.book.senateOther}</p>
         <p>Republicans: {this.state.book.senateGOP}</p>
         <p>Majority Leader: {this.state.book.senateMajority}</p>
         <p>Minority Leader: {this.state.book.senateMinority}</p>
         <Link to={"/reps/" + this.state.book._id}>  <li>Find a Senator!</li>
           </Link>
        
       
           <Chart
        chartType="PieChart"
        data={[['Task', 'Hours per Day'],["Democrats", this.state.book.senateDems],["Other", this.state.book.senateOther],["Republicans", this.state.book.senateGOP]]}
        options={{"title":"Party Breakdown","pieHole":0.4,"is3D":true, "colors": ["blue", "gray", "red"]}}
        graph_id="Sugar"
        width="100%"
        height="100px"
        legend_toggle
      />
       <h4>View Upcoming Legislation</h4>
         </div>
         <div className="stateBlogs" >
         <Link to={"/submit/" + this.state.book._id}> <h4>Have a Story About the {this.state.book.name} State Legislature? Submit Here!</h4></Link>
           <Link to={"/stateblog/" + this.state.book._id}>  <p>Find Stories</p>
           </Link>
           </div>
           <Footer />
        </div>
       
      );
    }
  }
  
  export default State;






