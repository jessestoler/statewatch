import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import { Chart } from 'react-google-charts';
import Footer from "../../components/Footer";
import Bills from "../../components/Bills";

class State extends Component {
  state = {
    stateInfo: {},
    bills: []
 
  };

  componentDidMount() {
    API.getState(this.props.match.params.id)
      .then(res => this.setState({ stateInfo: res.data }))
     
      .catch(err => console.log(err));

      this.loadBills();

      
  }




  loadBills = () => {
    API.getBills()
      .then(res =>
        this.setState({ bills: res.data})
      )
      .catch(err => console.log(err));
      
    
  };


  render() {
      return (
        <div>
          <Header
              houseDems={this.state.stateInfo.name} />
        
        <div className="desktop row">
        
         <div className="col-3">
         <div className="house">
         <h4 className="breakdown">House Breakdown</h4>
         <p>Democrats: {this.state.stateInfo.houseDems}</p>
         <p>Other: {this.state.stateInfo.houseOther}</p>
         <p>Republicans: {this.state.stateInfo.houseGOP}</p>
         <Chart
        chartType="PieChart"
        data={[['Task', 'Hours per Day'],["Democrats", this.state.stateInfo.houseDems],["Other", this.state.stateInfo.houseOther],["Republicans", this.state.stateInfo.houseGOP]]}
        options={{"title":"Party Breakdown","pieHole":0.4,"is3D":true, "colors": ["blue", "gray", "red"]}}
        graph_id="ScatterChart"
        width="100%"
        height="100px"
        legend_toggle
      />
         <p className="speaker">Speaker of the House: {this.state.stateInfo.speaker}</p>
         <p>Majority Leader: {this.state.stateInfo.houseMajority}</p>
         <p>Minority Leader: {this.state.stateInfo.houseMinority}</p>
         <Link to={"/reps/" + this.state.stateInfo._id}>  Find a Representative!
           </Link>
        
       
     
       </div>
         </div>
         <div className="stateMain col-6">
         <img src={this.state.stateInfo.flag} /> <br />
         <div className="stateDropdown">
         <Dropdown />
         </div>
         <img className="building" src={this.state.stateInfo.mainImage} />
         
              </div>
              <div className="col-3">
              <div className="senate">
         <h4 className="breakdown">Senate Breakdown</h4>
         <p>Democrats: {this.state.stateInfo.senateDems}</p>
         <p>Other: {this.state.stateInfo.senateOther}</p>
         <p>Republicans: {this.state.stateInfo.senateGOP}</p>
         <Chart
        chartType="PieChart"
        data={[['Task', 'Hours per Day'],["Democrats", this.state.stateInfo.senateDems],["Other", this.state.stateInfo.senateOther],["Republicans", this.state.stateInfo.senateGOP]]}
        options={{"title":"Party Breakdown","pieHole":0.4,"is3D":true, "colors": ["blue", "gray", "red"]}}
        graph_id="Sugar"
        width="100%"
        height="100px"
        legend_toggle
      />
         <p className="speaker">Majority Leader: {this.state.stateInfo.senateMajority}</p>
         <p>Minority Leader: {this.state.stateInfo.senateMinority}</p>
         <Link to={"/senators/" + this.state.stateInfo._id}>  Find a Senator!
           </Link>
        
       
     
      
         </div>
         </div>
        </div>
        <div className="mobile">
        <div className="row">
       
        <div className="col-2">
      </div>
      <div className="col-8">
      <div className="row">
        <div className="col-12">
        <h4 className="breakdown mobileHouse">House Breakdown</h4>
        </div>
        </div>
      <div className="row">
        
        <div className="col-4 mobileParties">
         <h5>Democrats</h5>
        <p> {this.state.stateInfo.houseDems}</p>
         </div>
         <div className="col-4 mobileParties">
         <h5>Other</h5>
        <p> {this.state.stateInfo.houseOther}</p>
         </div>
         <div className="col-4 mobileParties">
         <h5>Republicans </h5>
         <p>{this.state.stateInfo.houseGOP}</p>
        
         </div>
        
         </div>
         <div className="row">
         <div className="col-4">
         </div>
        
           <div className="col-4">
           <Link to={"/reps/" + this.state.stateInfo._id}>  Find a Representative!
           </Link>
         </div>
         <div className="col-4">
         </div>
           
         </div>
         <div className="row">
        
        <div className="col-4 mobileParties">
         <h5>Majority Leader</h5>
        <p> {this.state.stateInfo.houseMajority}</p>
         </div>
         <div className="col-4 mobileParties">
         <h5>Speaker of the House</h5>
        <p> {this.state.stateInfo.speaker}</p>
         </div>
         <div className="col-4 mobileParties">
         <h5>Minority Leader </h5>
         <p>{this.state.stateInfo.houseMinority}</p>
        
         </div>
        
         </div>
         <div className="row">
         <img src={this.state.stateInfo.flag} /> 
         </div>
         <div className="row">
        
        <div className="col-4 mobileParties">
         <h5>Democrats</h5>
        <p> {this.state.stateInfo.senateDems}</p>
         </div>
         <div className="col-4 mobileParties">
         <h5>Other</h5>
        <p> {this.state.stateInfo.senateOther}</p>
         </div>
         <div className="col-4 mobileParties">
         <h5>Republicans </h5>
         <p>{this.state.stateInfo.senateGOP}</p>
        
         </div>
        
         </div>
         <div className="row">
        
        <div className="col-6 mobileParties">
         <h5>Majority Leader</h5>
        <p> {this.state.stateInfo.senateMajority}</p>
         </div>
      
         <div className="col-6 mobileParties">
         <h5>Minority Leader </h5>
         <p>{this.state.stateInfo.senateMinority}</p>
        
         </div>
        
         </div>
         </div>
      <div className="col-2">
      </div>
        </div>
</div>
         <div className="stateBlogs" >
         <Link to={"/submit/" + this.state.stateInfo._id}> <p>Have a Story About the {this.state.stateInfo.name} State Legislature? Submit Here!</p></Link>
           <Link to={"/stateblog/" + this.state.stateInfo._id}>  <p>Find Stories</p>
           </Link>
           </div>
           <div className="row">
           <div className="col-1">
           </div>
           <div className="billContainer col-10">
           <h2>Highlighted Legislation</h2>
           <p>Click on any bill below to read, comment, and vote!</p>
   {this.state.bills.map(bill => (
     <Link to={"/bill/" + bill._id}> 
     {bill.state === this.state.stateInfo.name && 
            <Bills 
            
              key={Math.random() * 12}
              name={bill.name}
              image={bill.image}
              sponsor={bill.sponsor}
            />
     }
          </Link>
     
          ))}
    
</div>
<div className="col-1">
</div>     
</div>
     
<Footer />
        </div>
        
        
      /*  <div className="mobile row">
        <div className="col-2">
        
        </div>
        <div className="col-8">
      
       
         
        
       
      
       

         <div className="row">
         
         <div className="col-12 stateBlogs" >
         <Link to={"/submit/" + this.state.stateInfo._id}> <p>Have a Story About the {this.state.stateInfo.name} State Legislature? Submit Here!</p></Link>
           <Link to={"/stateblog/" + this.state.stateInfo._id}>  <p>Find Stories</p>
           </Link>
           </div>
         
         </div>
         <div className="row">
         <div className="billContainer col-12">
           <h2>Highlighted Legislation</h2>
           <p>Click on any bill below to read, comment, and vote!</p>
   {this.state.bills.map(bill => (
     <Link to={"/bill/" + bill._id}> 
     {bill.state === this.state.stateInfo.name && 
            <Bills 
            
              key={Math.random() * 12}
              name={bill.name}
              image={bill.image}
              sponsor={bill.sponsor}
            />
     }
          </Link>
     
          ))}
    
</div>
         </div>
       
        </div>
          <div>
        </div> 
        </div>*/
        
       


      );
    }
  }
  
  export default State;






