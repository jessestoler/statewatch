import React from 'react';
import { Link } from "react-router-dom";




const Statelink = props => (
    <div >
     <Link to={"/" + props.id}> 
            
             Back to the {props.name} page
                
                </Link>
            
       
    </div>
);

export default Statelink;