import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Comments from "../../components/Comments";
import { Link } from "react-router-dom";



class Blog extends Component {
  state = {
    book: {},
    name: "",
    text: "",
    blog: "",
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
        blog: this.state.book.title
      
       
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
    console.log(this.state.book);
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
      dislikes: this.state.book.dislikes + 1
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
      likes: this.state.book.likes + 1
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
   <div>
     <p className="byline">By {this.state.book.author}</p>
     <p className="content">{this.state.book.text}</p>
     <p>Likes: {this.state.book.likes}</p>
      <button onClick={this.upvote}>Like</button>
      <p>Dislikes: {this.state.book.dislikes}</p>
      <button onClick={this.downvote}>Dislike</button>
    
    
     <p>This post has {this.state.beatles.filter(beatle => beatle.blog == this.state.book.title).length } comments </p>
   {this.state.beatles.map(beatle => (
   <Link to={"/nothing"}> 
     {beatle.blog === this.state.book.title &&
            <Comments 
            
              key={Math.random() * 12}
              name={beatle.name}
              text={beatle.text}
              blog={beatle.blog}
            />
   }
            </Link>

            
     
          ))}
        
        Name: <input className="commentName" onChange={this.handleInputChange} type="text" name="name"  /> <br />
        Leave a Comment: <input className="commentText" onChange={this.handleInputChange} type="text" name="text"  /> 
         <button onClick={this.handleFormSubmit} >Submit Comment</button>
     </div>
     </div>
     
    );
  }
}



export default Blog;