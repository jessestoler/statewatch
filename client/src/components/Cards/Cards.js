import React from 'react';

const blue = {
    backgroundColor: "lightblue"
  };

const red = {
    backgroundColor: "rgb(204, 51, 51)"
};


const Cards = props => (
    <div className="cards" style={props.party === "Democrat" ? blue : red}>
     
            
                <p>{props.name}</p>  
                
                <img src={props.image} />
                <p>{props.district}</p>
                
               
            
       
    </div>
);

export default Cards;