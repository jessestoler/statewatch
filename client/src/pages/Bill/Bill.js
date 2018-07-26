import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import { Chart } from 'react-google-charts';
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";



class Bill extends Component {
  state = {
    billData: {},
    commentInfo: {},
    name: "",
    text: "",
    vote: "",
    comments: [],
    style: {
       
        display: "none"
    },
    inputStyle: {
      display: "block"
    },
    textStyle: {
      display: "none"
    },
  
    commentTag: ""
    
  };

  componentDidMount() {
    API.getBill(this.props.match.params.id)
      .then(res => this.setState({ billData: res.data }))
     
      .catch(err => console.log(err));
      this.loadComments();
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveComment({
        name: this.state.name,
        text: this.state.text,
        attachment: this.state.billData.name,
        type: "bill",
        summary: this.state.text.substring(0, 100),
        likes: 0,
        dislikes: 0,
        popularity: 0,
        amount: 0,
        vote: this.state.vote
      
       
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
    axios.put("/api/bills/" + this.props.match.params.id, {
      dislikes: this.state.billData.dislikes + 1,
      popularity: this.state.billData.likes / (this.state.billData.votes + 1),
      votes: this.state.billData.votes + 1
      
    })
    .then(response => {
      this.refresh();
    })
    .catch(error => {
      console.log(error);
    });

};

showList = () => {
    this.setState({
        style: {
            display: "block"
        },
        inputStyle: {
          display: "none"
        }
      });
}; 







dislike = event => {
this.setState({commentTag: event.target.nextSibling.innerHTML});



setTimeout(
  function() {
      API.getComment(this.state.commentTag)
      .then(res => this.setState({ commentInfo: res.data }) )  
     
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
       this.refresh();
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
        .then(res => this.setState({ commentInfo: res.data }) )  
       
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
         this.refresh();
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
      likes: this.state.billData.likes + 1,
      popularity: (this.state.billData.likes + 1) / (this.state.billData.votes + 1),
      votes: this.state.billData.votes + 1
      
    })
    .then(response => {
      this.refresh();
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
        },
        inputStyle: {
          display: "block"
        }
      });

};

yes = () => {
    this.setState({
        vote: "yes",
        style: {
            display: "none"},

            inputStyle: {
              display: "block"
            }
        
      });

};



  render() {

   

    return (
      <div>
         <Header 
              houseDems={this.state.billData.name} />
               <div className="sidebar">
              <Dropdown />
              </div>


   <div >
     <p className="content">{this.state.billData.text}</p>
     <div className="vote">
      <div className="voteLeft">
      <button onClick={this.upvote}>Yay</button><br />
      <p className="billScore">{this.state.billData.likes}</p>
      </div>
     
     <div className="voteRight">
      <button onClick={this.downvote}>Nay</button><br />
      <p className="billScore">{this.state.billData.dislikes}</p>
      </div>
      </div>
      <Chart
        chartType="PieChart"
        data={[['Task', 'Hours per Day'],["Nays", this.state.billData.dislikes],["Yays", this.state.billData.likes]]}
        options={{"title":"Popularity","pieHole":0.4,"is3D":true, "colors": ["red", "green"]}}
        graph_id="votes"
        width="120%"
        height="100px"
        legend_toggle
      />
      <div className="mobileFeedback">
      <div className="row">
      <div className="col-3">
      </div>
      <div className="col-6 nays scroll">
      <h4>Arguments Against</h4>
      {this.state.comments.map(comment => 
{
    return comment.attachment === this.state.billData.name && comment.vote === "no" ?
    <div className="amendments red" >
    <h4>{comment.name}</h4>  
    <p >{comment.text}</p>
    <div className="amendmentVotes">
    <div className="left">
    <p>Dislikes</p>
    <p className="commentScore">{comment.dislikes}</p>
    <button onClick={this.dislike}>Dislike</button>
    <p className="voteTag">{comment._id}</p>
    </div>

    <div className="right">
    <p>Likes</p>
    <p className="commentScore">{comment.likes}</p>
    <button onClick={this.like}>Like</button>
    <p className="voteTag">{comment._id}</p>
    </div>
    
 
    </div>
   </div>
    
   



    :
        <h1></h1>
}

     
          )}
          </div>
          <div className="col-3">
      </div>
      </div>
      <div className="row">
      <div className="col-3">
      </div>
      <div className="col-6 nays scroll">
      <h4>Arguments For</h4>
      {this.state.comments.map(comment => 
{
    return comment.attachment === this.state.billData.name && comment.vote === "yes" ?
    <div className="amendments green" >
    <h4>{comment.name}</h4>  
    <p >{comment.text}</p>
    
    <div className="amendmentVotes">
    <div className="left">
    <p>Dislikes</p>
    <p className="commentScore">{comment.dislikes}</p>
    <button onClick={this.dislike}>Dislike</button>
    <p className="voteTag">{comment._id}</p>
    </div>

    <div className="right">
    <p>Likes</p>
    <p className="commentScore">{comment.likes}</p>
    <button onClick={this.like}>Like</button>
    <p className="voteTag">{comment._id}</p>
    </div>
    
 
    </div>
   </div>
    
   



    :
        <h1></h1>
}

     
          )}
          </div>
          <div className="col-3">
      </div>
      </div>
      </div>
     
      <div className="billFeedback row">
      <div className="col-1">
      </div>
      <div className="col-4 scroll">
      <h4>Arguments Against</h4>
      {this.state.comments.map(comment => 
{
    return comment.attachment === this.state.billData.name && comment.vote === "no" ?
    <div className="amendments red">
     <h4>{comment.name}</h4>  
    <p >{comment.text}</p>
    <div className="amendmentVotes">
    <div className="left">
    <p>Dislikes</p>
    <p className="commentScore">{comment.dislikes}</p>
    <button onClick={this.dislike}>Dislike</button>
    <p className="voteTag">{comment._id}</p>
    </div>

    <div className="right">
    <p>Likes</p>
    <p className="commentScore">{comment.likes}</p>
    <button onClick={this.like}>Like</button>
    <p className="voteTag">{comment._id}</p>
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

         <div className="col-4 scroll">
      <h4 >Arguments For</h4>
      {this.state.comments.map(comment => 
{
    return comment.attachment === this.state.billData.name && comment.vote === "yes" ?
    <div className="amendments green">
    <h4>{comment.name}</h4>  
    <p >{comment.text}</p>
    <p onClick={this.readLess} style={this.state.textStyle} >...Read Less</p>
    <div className="amendmentVotes">
    <div className="left">
    <p>Dislikes</p>
    <p className="commentScore">{comment.dislikes}</p>
    <button onClick={this.dislike}>Dislike</button>
    <p className="voteTag">{comment._id}</p>
    
    </div>

    <div className="right">
    <p>Likes</p>
    <p className="commentScore">{comment.likes}</p>
    <button onClick={this.like}>Like</button>
    <p className="voteTag">{comment._id}</p>
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

        <div className="selectVote">
        <button onClick={this.showList}>Vote</button>
        <ul className="voteList" style={this.state.style}>
        <li onClick={this.no}>No</li>
        <li onClick={this.yes}>Yes</li>
        </ul>
        <input className="commentVote" style={this.state.inputStyle} type="text" value={this.state.vote} />
       </div>
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