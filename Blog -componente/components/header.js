import React from "react";
//import Timer from "./timer";
import Navigation from "./navigation";

const Header = () => {

    return (

        <div style={{paddingTop:"1px",paddingBottom:"10px"}}>
            
            <img style={{float:"left",paddingBottom:"10px", textAlign:"center"}}src="./blog.png" />

            <Navigation />

        </div>

    );
};

export default Header;