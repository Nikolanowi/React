import React from "react";
import {Link} from "react-router-dom";



const Navigation = () => {

    return (
        <nav>
            <ul>
                
               
                
               
                <li style ={{float:"right", listStyleType:"none",fontSize:"1.2em",fontWeight:"bold"}}><Link to="/"style={{color:"#782211",fontFamily:"Arial Rounded MT Bold"}}> Author </Link></li>
                <li style ={{float:"right",listStyleType:"none",fontSize:"1.1em"}}>|   |</li>
                
                <li style ={{float:"right",listStyleType:"none", fontSize:"1.2em",fontFamily:"Arial Rounded MT Bold",fontWeight:"bold"}}><Link to='/about' style={{color:"#782211"}}> About </Link></li>
                <li style ={{float:"right",listStyleType:"none",fontSize:"1.2em"}}>|   |</li>
                <li style ={{float:"right", listStyleType:"none",fontSize:"1.2em",fontWeight:"bold"}}><Link to="/"style={{color:"#782211"}}> Home </Link></li>
                

            </ul>
        </nav>


    );



};

export default Navigation;
