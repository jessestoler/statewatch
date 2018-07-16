

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";

import Cards from "../../components/Cards";


class Group extends Component {
  

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
    API.getSenators()
      .then(res =>
        this.setState({ beatles: res.data})
      )
      .catch(err => console.log(err));
  };
  


  render() {

   

    return (
      <div>
  
   {this.state.beatles.map(beatle => (
     <Link to={"/profile/" + beatle._id}> 
     {beatle.state === this.state.books.name &&
            <Cards 
            
              key={Math.random() * 12}
              name={beatle.name}
              image={beatle.image}
              firstYear={beatle.firstYear}
              party={beatle.party}
            />
   }
            </Link>
     
          ))}
    

    

       
      </div>
    );
  }
}

export default Group;