import React from 'react';




const Amendments = props => (
    <div className="amendments" >
     
            
     <p>{props.name}</p>  
    <p>{props.text}</p>
    <div className="amendmentVotes">
    <div className="left">
    <p>Likes</p>
    <p>{props.likes}</p>
    <button  >Like</button>
    </div>
    
    <div className="right">
    <p>Dislikes</p>
    <p>{props.dislikes}</p>
    <button   >Dislike</button>
    </div>
    </div>
                
               
            
       
    </div>
);

export default Amendments;