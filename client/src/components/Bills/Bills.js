import React from 'react';





const Bills = props => (
    <div className="bills" >
     
            
                <p>{props.name}</p>  
               
                <img src={props.image} />
                <p>{props.sponsor}</p>
                
                
               
            
       
    </div>
);

export default Bills;