import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";



class Blog extends Component {
  state = {
    blog: {},
    name: "",
    text: "",
    block: {
      display: "block"
    },
    none: {
      display: "none"
    },
    commentStyle: {
      display: "none"
    },
    comments: []
    
  };

  componentDidMount() {
    API.getBlog(this.props.match.params.id)
      .then(res => this.setState({ blog: res.data }))
     
      .catch(err => console.log(err));
      this.loadComments();
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveComment({
        name: this.state.name,
        text: this.state.text,
        attachment: this.state.blog.title,
        type: "blog",
        summary: this.state.text.substring(0, 100),
        likes: 0,
        dislikes: 0,
        popularity: 0,
        amount: 0,
        vote: "doesn't matter"
      
       
      })

      .then(res => this.refresh())
      .catch(err => console.log(err));

    
        alert("comment submitted");
        
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  refresh = () => {
    window.location.reload();
  };

  loadComments = () => {
    API.getComments()
      .then(res =>
        this.setState({ comments: res.data})
      )
      .catch(err => console.log(err));
  };

  downvote = () => {
    axios.put("/api/blogs/" + this.props.match.params.id, {
      dislikes: this.state.blog.dislikes + 1,
      popularity: this.state.blog.likes / (this.state.blog.votes + 1),
      votes: this.state.blog.votes + 1
      
    })
    .then(response => {
      this.refresh();
    })
    .catch(error => {
      console.log(error);
    });

};


  upvote = () => {
    axios.put("/api/blogs/" + this.props.match.params.id, {
      likes: this.state.blog.likes + 1,
      popularity: (this.state.blog.likes + 1) / (this.state.blog.votes + 1),
      votes: this.state.blog.votes + 1
      
    })
    .then(response => {
      this.refresh();
    })
    .catch(error => {
      console.log(error);
    });

};


  render() {
    return (
      <div>
         <Header 
              houseDems={this.state.blog.title} />
               <div className="sidebar">
              <Dropdown />
              </div>
   <div>
     <p className="byline" >By {this.state.blog.author}</p>
     <p  className="content">{this.state.blog.text}</p>
     <div className="vote">
     <p className="voteLeft">Likes: {this.state.blog.likes}</p>
      <button className="voteLeft" onClick={this.upvote}>Like</button>
      <p className="voteRight">Dislikes: {this.state.blog.dislikes}</p>
      <button className="voteRight" onClick={this.downvote}>Dislike</button>
      </div>
    <div className="commentSection">
     <p className="commentTotal">This post has {this.state.comments.filter(comment => comment.attachment == this.state.blog.title).length } {this.state.comments.filter(comment => comment.attachment == this.state.blog.title).length === 1? 'comment' : 'comments'} </p>
     {this.state.comments.map(comment => 
{
    return comment.attachment === this.state.blog.title ?
    <div className="feedback">
    <p onClick={this.stuff}>{comment.name}</p>  
    <p >{comment.text}</p>

 
   </div>
    
   



    :
        <h1></h1>
}

     
          )}
        
        Name: <input className="commentName" onChange={this.handleInputChange} type="text" name="name"  /> <br />
        Leave a Comment: <input className="commentText" onChange={this.handleInputChange} type="text" name="text"  /> 
         <button className="commentButton" onClick={this.handleFormSubmit} >Submit Comment</button>
         </div>
     </div>
<div className="blogFooter">
<Footer />
</div>

     </div>
     
    );
  }
}



export default Blog;