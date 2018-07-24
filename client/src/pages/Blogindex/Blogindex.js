

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Blogentry from "../../components/Blogentry";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";


class Blogindex extends Component {
  

  state = {
    blogs: [],
    stateInfo: []
    
  };

 

  componentDidMount() {
    API.getState(this.props.match.params.id)
      .then(res => this.setState({ stateInfo: res.data }))
     
      .catch(err => console.log(err));

      this.loadBlogs();
      
      
  }

  

  loadBlogs = () => {
    API.getBlogs()
      .then(res =>
        this.setState({ blogs: res.data})
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
    
              <p>Sort By: Date |<Link to={"/stateblog/sorted/" + this.state.stateInfo._id}> Popularity</Link></p>
   
   <h4 className="noArticles">No Articles Here</h4>
   {this.state.blogs.map(blog => (
   <Link to={"/blog/" + blog._id}> 
     {blog.state === this.state.stateInfo.name &&
            <Blogentry 
            
              key={Math.random() * 12}
              title={blog.title}
              text={blog.text}
              author={blog.author}
              summary={blog.summary}
              state={blog.state}
              likes={blog.likes}
              dislikes={blog.dislikes}
            />
   }
            </Link>

            
     
          ))}
    
   
    
    
<div className="indexFooter" >
<Footer />
       </div>
      </div>
    );
  }
}

export default Blogindex;