import React from 'react';



const Comments = props => (
    <div className="feedback">
     
            
                <p className="black">{props.name}</p>  
                <p className="black">{props.text}</p>
                <p className="none">{props.blog}</p>
               
            
       
    </div>
);

export default Comments;