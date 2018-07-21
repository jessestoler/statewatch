

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";

import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


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
          <Header 
              houseDems={this.state.books.name} />
   {this.state.beatles.map(beatle => (
     <Link to={"/profile/" + beatle._id}> 
     {beatle.state === this.state.books.name &&
            <Cards 
            
              key={Math.random() * 12}
              name={beatle.name}
              image={beatle.image}
              firstYear={beatle.firstYear}
              party={beatle.party}
              district={beatle.district}
            />
   }
            </Link>
     
          ))}
    

    <div className="groupFooter">
<Footer />
</div>
       
      </div>
    );
  }
}

export default Group;