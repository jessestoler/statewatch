import React from 'react';



const Comments = props => (
    <div className="feedback">
     
            
                <p className="black">{props.name}</p>  
                <p className="black">{props.text}</p>
               
            
       
    </div>
);

export default Comments;