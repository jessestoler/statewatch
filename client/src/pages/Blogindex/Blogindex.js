

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Blogentry from "../../components/Blogentry";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";


class Blogindex extends Component {
  

  state = {
    books: [],
    beatles: []
  };

 

  componentDidMount() {
    API.getState(this.props.match.params.id)
      .then(res => this.setState({ books: res.data }))
     
      .catch(err => console.log(err));

      this.loadBooks();
      
      
  }

  

  loadBooks = () => {
    API.getBlogs()
      .then(res =>
        this.setState({ beatles: res.data})
      )
      .catch(err => console.log(err));
      
    
  };
  



  render() {

   
 
    return (
      <div>
    <Header 
              houseDems={this.state.books.name} />
              <div className="sidebar">
              <Dropdown />
              <Link to={"/submit/" + this.state.books._id}> 
    <p>Got a Scoop of Your Own?</p>
    </Link>
              </div>
    
              <p>Sort By: Date |<Link to={"/stateblog/sorted/" + this.state.books._id}> Popularity</Link></p>
   {this.state.beatles.map(beatle => (
   <Link to={"/blog/" + beatle._id}> 
     {beatle.state === this.state.books.name &&
            <Blogentry 
            
              key={Math.random() * 12}
              title={beatle.title}
              text={beatle.text}
              author={beatle.author}
              summary={beatle.summary}
              state={beatle.state}
              likes={beatle.likes}
              dislikes={beatle.dislikes}
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