import React from 'react';


const Blogentry = props => (
    <div >
                <div className="blogCard">
            
                <h3>{props.title}</h3>  
                <p>By {props.author}</p>
                <p className="summary">{props.summary}</p>
               
                <div className="thumbs">
                <p className="voteLeft">Likes: {props.likes}</p>
                <p className="voteRight">Dislikes: {props.dislikes}</p>
                </div>
               </div>
            
       
    </div>
);

export default Blogentry;