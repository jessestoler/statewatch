import React from 'react';


const Blogentry = props => (
    <div >
                <div className="blogCard">
            
                <p>{props.title}</p>  
                <p className="none">{props.text}</p>
                <p>By {props.author}</p>
                <p className="none">{props.state}</p>
                <p>Likes: {props.likes}</p>
                <p>Dislikes: {props.dislikes}</p>
               </div>
            
       
    </div>
);

export default Blogentry;