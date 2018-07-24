import React, { Component } from "react";
import ReactDOM from "react";
import axios from "axios";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import { Chart } from 'react-google-charts';
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";



class Bill extends Component {
  state = {
    book: {},
    commentInfo: {},
    name: "",
    text: "",
    vote: "",
    beatles: [],
    style: {
        display: "none"
    },
    commentTag: "",
    idArray: []
    
  };

  componentDidMount() {
    API.getBill(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
     
      .catch(err => console.log(err));
      this.loadComments();
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveComment({
        name: this.state.name,
        text: this.state.text,
        attachment: this.state.book.name,
        type: "bill",
        likes: 0,
        dislikes: 0,
        popularity: 0,
        amount: 0,
        vote: this.state.vote
      
       
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
    axios.put("/api/bills/" + this.props.match.params.id, {
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

showList = () => {
    this.setState({
        style: {
            display: "block"
        }
      });
}; 


dislike = event => {
this.setState({commentTag: event.target.nextSibling.innerHTML});



setTimeout(
  function() {
      API.getComment(this.state.commentTag)
      .then(res => this.setState({ commentInfo: res.data }) )  //this.setState({ commentInfo: res.data })
     
      .catch(err => console.log(err));
  
  
  }
  .bind(this),
  300
);

setTimeout(
  function() {
    axios.put("/api/comments/" + this.state.commentInfo._id, {
       dislikes: this.state.commentInfo.dislikes + 1,
       amount: this.state.commentInfo.amount + 1
       
     })
     .then(response => {
     })
     .catch(error => {
       console.log(error);
     });
  
  
  }
  .bind(this),
  400
);

setTimeout(
  function() {
    axios.put("/api/comments/" + this.state.commentInfo._id, {
       popularity: this.state.commentInfo.likes  / (this.state.commentInfo.amount + 1) 
      
       
     })
     .then(response => {
       this.loadBooks();
     })
     .catch(error => {
       console.log(error);
     });
  
  
  }
  .bind(this),
  500
);


};

like = event => {
  this.setState({commentTag: event.target.nextSibling.innerHTML});
  
  
  
  setTimeout(
    function() {
        API.getComment(this.state.commentTag)
        .then(res => this.setState({ commentInfo: res.data }) )  //this.setState({ commentInfo: res.data })
       
        .catch(err => console.log(err));
    
    
    }
    .bind(this),
    300
  );
  
  setTimeout(
    function() {
      axios.put("/api/comments/" + this.state.commentInfo._id, {
         likes: this.state.commentInfo.likes + 1,
        
         amount: this.state.commentInfo.amount + 1
         
       })
       .then(response => {
       })
       .catch(error => {
         console.log(error);
       });
    
    
    }
    .bind(this),
    400
  );

  setTimeout(
    function() {
      axios.put("/api/comments/" + this.state.commentInfo._id, {
         popularity: (this.state.commentInfo.likes + 1)  / (this.state.commentInfo.amount + 1)
        
         
       })
       .then(response => {
         this.loadBooks();
       })
       .catch(error => {
         console.log(error);
       });
    
    
    }
    .bind(this),
    500
  );
  
  
  
  };

  upvote = () => {
    axios.put("/api/bills/" + this.props.match.params.id, {
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

no = () => {
    this.setState({
        vote: "no",
        style: {
            display: "none"
        }
      });

};

yes = () => {
    this.setState({
        vote: "yes",
        style: {
            display: "none"
        }
      });

};

  render() {

   

    return (
      <div>
         <Header 
              houseDems={this.state.book.name} />
               <div className="sidebar">
              <Dropdown />
              </div>


   <div>
     <p className="content">{this.state.book.text}</p>
     <div className="vote">
     <p className="voteLeft">Yays: {this.state.book.likes}</p>
      <button className="voteLeft" onClick={this.upvote}>Yay</button>
      <p className="voteRight">Nays: {this.state.book.dislikes}</p>
      <button className="voteRight" onClick={this.downvote}>Nay</button>
      </div>
      <Chart
        chartType="PieChart"
        data={[['Task', 'Hours per Day'],["Nays", this.state.book.dislikes],["Yays", this.state.book.likes]]}
        options={{"title":"Party Breakdown","pieHole":0.4,"is3D":true, "colors": ["red", "green"]}}
        graph_id="votes"
        width="100%"
        height="100px"
        legend_toggle
      />
      <div className="billFeedback row">
      <div className="col-1">
      </div>
      <div className="col-4 scroll yays">
      <h4 >Arguments For</h4>
      {this.state.beatles.map(beatle => 
{
    return beatle.attachment === this.state.book.name && beatle.vote === "yes" ?
    <div className="amendments green">
    <p>{beatle.name}</p>  
    <p>{beatle.text}</p>
    <div className="amendmentVotes">
    <div className="left">
    <p>Likes</p>
    <p>{beatle.likes}</p>
    <button onClick={this.like}>Like</button>
    <p className="voteTag">{beatle._id}</p>
    </div>
    
    <div className="right">
    <p>Dislikes</p>
    <p>{beatle.dislikes}</p>
    <button onClick={this.dislike}>Dislike</button>
    <p className="voteTag">{beatle._id}</p>
    
    </div>
    </div>
   </div>
    
   



    :
        <h1></h1>
}

     
          )}
          
      </div>
      <div className="col-2">
      </div>
      <div className="col-4 nays scroll">
      <h4>Arguments Against</h4>
      {this.state.beatles.map(beatle => 
{
    return beatle.attachment === this.state.book.name && beatle.vote === "no" ?
    <div className="amendments red">
    <p>{beatle.name}</p>  
    <p>{beatle.text}</p>
    
    <div className="amendmentVotes">
    <div className="left">
    <p>Likes</p>
    <p>{beatle.likes}</p>
    <button onClick={this.like}>Like</button>
    <p className="voteTag">{beatle._id}</p>
    </div>
    
    <div className="right">
    <p>Dislikes</p>
    <p>{beatle.dislikes}</p>
    <button onClick={this.dislike}>Dislike</button>
    <p className="voteTag">{beatle._id}</p>
    </div>
    </div>
   </div>
    
   



    :
        <h1></h1>
}

     
          )}
      </div>
      <div className="col-1">
      </div>
      </div>
      
   <div className="billComments">

        
        <button onClick={this.showList}>Vote</button>
        <ul style={this.state.style}>
        <li onClick={this.no}>No</li>
        <li onClick={this.yes}>Yes</li>
        </ul>
        <input  type="text" value={this.state.vote} />
        <br />
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



export default Bill;