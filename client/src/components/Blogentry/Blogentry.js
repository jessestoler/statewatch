import React from 'react';
import "./blogentry.css";


const Blogentry = props => (
    <div >
     
            
                <p>{props.title}</p>  
                <p className="text">{props.text}</p>
                <p>{props.author}</p>
                <p className="state">{props.state}</p>
               
            
       
    </div>
);

export default Blogentry;