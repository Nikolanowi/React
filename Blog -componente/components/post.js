import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
    return (
        <Link to={"/singlepost/" + props.post.id} >
            <div style={{ paddingTop: "10px" }}>
                <h5 style={{ fontSize: "1.2em", backgroundColor: "#782211", color: "#F8EFE5" }}>{props.post.title}</h5>
                <p style={{ fontSize: "1em", color: "purple", backgroundColor: "" }} >{props.post.body}</p>
            </div>
        </Link>
    );
};

export default Post;