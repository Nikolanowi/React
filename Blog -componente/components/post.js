import React from "react";


const Post = (props) => {
    return (
        <div style={{paddingTop:"25px"}}>
            
            
            <h5 style={{fontSize:"1.2em" ,backgroundColor: "#782211" ,color:"#F8EFE5"}}>{props.post.title}</h5>
            <p style={{ fontSize: "1em", color: "purple", backgroundColor:"" }} >{props.post.body}</p>
            
        </div>
    );
};




export default Post;