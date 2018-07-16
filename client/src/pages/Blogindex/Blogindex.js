

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";

import Blogentry from "../../components/Blogentry";


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
  
   {this.state.beatles.map(beatle => (
   <Link to={"/blog/" + beatle._id}> 
     {beatle.state === this.state.books.name &&
            <Blogentry 
            
              key={Math.random() * 12}
              title={beatle.title}
              text={beatle.text}
              author={beatle.author}
              state={beatle.state}
            />
   }
            </Link>
     
          ))}
    

    

       
      </div>
    );
  }
}

export default Blogindex;