import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import Comments from "../../components/Comments";
import { Link } from "react-router-dom";



class Blog extends Component {
  state = {
    book: {},
    name: "",
    text: "",
   
    beatles: []
    
  };

  componentDidMount() {
    API.getBlog(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
     
      .catch(err => console.log(err));
      this.loadComments();
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveComment({
        name: this.state.name,
        text: this.state.text,
        attachment: this.state.book.title,
        type: "blog",
        likes: 0,
        dislikes: 0,
        popularity: 0,
        amount: 0,
        vote: "doesn't matter"
      
       
      })

      .then(res => this.loadBooks())
      .catch(err => console.log(err));

    
        alert("comment submitted");
        
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBooks = () => {
    window.location.reload();
  };

  loadComments = () => {
    API.getComments()
      .then(res =>
        this.setState({ beatles: res.data})
      )
      .catch(err => console.log(err));
  };

  downvote = () => {
    axios.put("/api/blogs/" + this.props.match.params.id, {
      dislikes: this.state.book.dislikes + 1,
      popularity: this.state.book.likes / (this.state.book.votes + 1),
      votes: this.state.book.votes + 1
      
    })
    .then(response => {
      this.loadBooks();
    })
    .catch(error => {
      console.log(error);
    });

};


  upvote = () => {
    axios.put("/api/blogs/" + this.props.match.params.id, {
      likes: this.state.book.likes + 1,
      popularity: (this.state.book.likes + 1) / (this.state.book.votes + 1),
      votes: this.state.book.votes + 1
      
    })
    .then(response => {
      this.loadBooks();
    })
    .catch(error => {
      console.log(error);
    });

};



  render() {
    return (
      <div>
         <Header 
              houseDems={this.state.book.title} />
               <div className="sidebar">
              <Dropdown />
              </div>
   <div>
     <p className="byline">By {this.state.book.author}</p>
     <p className="content">{this.state.book.text}</p>
     <div className="vote">
     <p className="voteLeft">Likes: {this.state.book.likes}</p>
      <button className="voteLeft" onClick={this.upvote}>Like</button>
      <p className="voteRight">Dislikes: {this.state.book.dislikes}</p>
      <button className="voteRight" onClick={this.downvote}>Dislike</button>
      </div>
    <div className="commentSection">
     <p className="commentTotal">This post has {this.state.beatles.filter(beatle => beatle.attachment == this.state.book.title).length } {this.state.beatles.filter(beatle => beatle.attachment == this.state.book.title).length === 1? 'comment' : 'comments'} </p>
     {this.state.beatles.map(beatle => 
{
    return beatle.attachment === this.state.book.title ?
    <div className="feedback">
    <p>{beatle.name}</p>  
    <p>{beatle.text}</p>
 
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