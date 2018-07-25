import React from 'react';





const Bills = props => (
    <div className="bills" >
     
            
                <p className="billName">{props.name}</p>  
                
                <img className="billImage" src={props.image} />
                <div className="sponsor">
                <h6>Main Sponsor(s):</h6>
                <p >{props.sponsor}</p>
                </div>
                
                
               
            
       
    </div>
);

export default Bills;