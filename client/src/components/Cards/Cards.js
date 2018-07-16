import React from 'react';
import "./cards.css";
const blue = {
    backgroundColor: "blue"
  };

const red = {
    backgroundColor: "red"
};


const Cards = props => (
    <div className="cards" style={props.party === "Democrat" ? blue : red}>
     
            
                <p>{props.name}</p>  
                <p>{props.firstYear}</p>
                <img src={props.image} />
                <p>{props.party}</p>
               
            
       
    </div>
);

export default Cards;