import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import axios from "axios";


class Profile extends Component {
  state = {
    person: {},
    style: {
      display: "none"
    },
    block: {
      display: "block"
    },
    economyStyle: {
      display: "none"
    },
    economyBlock: {
      display: "block"
    },
    environmentStyle: {
      display: "none"
    },
    environmentBlock: {
      display: "block"
    },
    socialStyle: {
      display: "none"
    },
    socialBlock: {
      display: "block"
    },
  };

  componentDidMount() {
    API.getPerson(this.props.match.params.id)
      .then(res => this.setState({ person: res.data }))
     
      .catch(err => console.log(err));
    
  }

  refresh = () => {
    window.location.reload();
  };

  edit = () => {
    this.setState({
      style: {
        display: "block"
      },
      block: {
        display: "none"
      }
    });

};

economyEdit = () => {
  this.setState({
    economyStyle: {
      display: "block"
    },
    economyBlock: {
      display: "none"
    }
  });

};

environmentEdit = () => {
  this.setState({
    environmentStyle: {
      display: "block"
    },
    environmentBlock: {
      display: "none"
    }
  });

};

socialEdit = () => {
  this.setState({
    socialStyle: {
      display: "block"
    },
    socialBlock: {
      display: "none"
    }
  });

};


submitEdit = () => {
  axios.put("/api/persons/" + this.props.match.params.id, {
    bio: this.state.bio
  })
  .then(response => {
    this.refresh();
  })
  .catch(error => {
    console.log(error);
  });

};

submitEconomy = () => {
  axios.put("/api/persons/" + this.props.match.params.id, {
    economy: this.state.economy
  })
  .then(response => {
    this.refresh();
  })
  .catch(error => {
    console.log(error);
  });

};

submitEnvironment = () => {
  axios.put("/api/persons/" + this.props.match.params.id, {
    environment: this.state.environment
  })
  .then(response => {
    this.refresh();
  })
  .catch(error => {
    console.log(error);
  });

};

submitSocial = () => {
  axios.put("/api/persons/" + this.props.match.params.id, {
    social: this.state.social
  })
  .then(response => {
    this.refresh();
  })
  .catch(error => {
    console.log(error);
  });

};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });

};
  

  render() {
    return (
      <div>
         <Header 
              houseDems={this.state.person.name} />
        <img className="profileImage" src={this.state.person.image} />
        <div className="quickFacts">
        <h3>Quick Facts</h3>
        <p>Political Party: {this.state.person.party}</p>
        <p>First Year: {this.state.person.firstYear}</p>
        <p>District: {this.state.person.district}  </p>
       

        </div>
        <div className="sidebar">
              <Dropdown />
              </div>
        <div className="bio">
          <h4>Biography</h4>
          <button className="editBio" onClick={this.edit}>Edit</button>
          <p style={this.state.block}>{this.state.person.bio}</p>
        <input className="bioInput" defaultValue={this.state.person.bio} name="bio" onChange={this.handleInputChange} style={this.state.style} type="text" />
        <button onClick={this.submitEdit} style={this.state.style}>Done Editing</button>
          </div>
          <div className="quickLinks">
          <div className="left">
          <Link to={"https://leg.colorado.gov/legislators/crisanta-duran"}>  Official Page
           </Link>
           </div>
           <div className="right">
          <Link to={"https://twitter.com/crisantaduran"}>  Twitter
           </Link>
           </div>
          
            </div>

<div className="issuesContainer">

<div className="issues">
<h3>Economy</h3>
<button className="editIssue" onClick={this.economyEdit}>Edit</button>
<p style={this.state.economyBlock}>{this.state.person.economy}</p>
<input className="bioInput" defaultValue={this.state.person.economy} name="economy" onChange={this.handleInputChange} style={this.state.economyStyle} type="text" />
<button onClick={this.submitEconomy} style={this.state.economyStyle}>Done Editing</button>
</div>
<div className="issues">
<h3>Environment</h3>
<button className="editIssue" onClick={this.environmentEdit}>Edit</button>
<p style={this.state.environmentBlock}>{this.state.person.environment}</p>
<input className="bioInput" defaultValue={this.state.person.environment} name="environment" onChange={this.handleInputChange} style={this.state.environmentStyle} type="text" />
<button onClick={this.submitEnvironment} style={this.state.environmentStyle}>Done Editing</button>
<div className="issues">
<h3 className="social">Social</h3>
<button className="editSocial" onClick={this.socialEdit}>Edit</button>
<p className="social" style={this.state.socialBlock}>{this.state.person.social}</p>
<input className="socialInput" defaultValue={this.state.person.social} name="social" onChange={this.handleInputChange} style={this.state.socialStyle} type="text" />
<button className="socialButton" onClick={this.submitSocial} style={this.state.socialStyle}>Done Editing</button>
</div>

</div>

<div className="profileFooter">
<Footer />
</div>
     </div>
     </div>
    );
  }
}



export default Profile;