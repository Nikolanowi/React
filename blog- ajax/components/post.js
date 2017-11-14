import React from "react";


const Post = (props) => {
    return (
        <div>
            <hr></hr>
            <h5 style={{ backgroundColor: "#097" }}>{props.post.title}</h5>
            <p style={{ fontSize: "1em", color: "purple" }} >{props.post.body}</p>
            <hr />
        </div>
    );
};




export default Post;