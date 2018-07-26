

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Blogentry from "../../components/Blogentry";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";


class Blogindex extends Component {
  

  state = {
    stateInfo: [],
    votes: []
  };

 

  componentDidMount() {
    API.getState(this.props.match.params.id)
      .then(res => this.setState({ stateInfo: res.data }))
     
      .catch(err => console.log(err));

      this.loadBlogs();
      
  }

  

  loadBlogs = () => {
    API.getVotes()
      .then(res =>
        this.setState({ votes: res.data})
      )
      .catch(err => console.log(err));
  };
  


  render() {

   

    return (
      <div>
    <Header 
              houseDems={this.state.stateInfo.name} />
              <div className="sidebar">
              <Dropdown />
              <Link to={"/submit/" + this.state.stateInfo._id}> 
    <p>Got a Scoop of Your Own?</p>
    </Link>
              </div>
              <div className="blogList">
              <p>Sort By: <Link to={"/stateblog/" + this.state.stateInfo._id}>Date</Link> | Popularity</p>
   {this.state.votes.map(vote => (
   <Link to={"/blog/" + vote._id}> 
     {vote.state === this.state.stateInfo.name &&
            <Blogentry 
            
              key={Math.random() * 12}
              title={vote.title}
              text={vote.text}
              author={vote.author}
              summary={vote.summary}
              state={vote.state}
              likes={vote.likes}
              dislikes={vote.dislikes}
            />
   }
            </Link>

            
     
          ))}
    </div>
    <div className="indexDropdown">
    <Dropdown />
    </div>
    
    <div className="indexFooter">
<Footer />
       </div>
       
      </div>
    );
  }
}

export default Blogindex;