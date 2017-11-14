import React from "react";
import Post from "./post";
import data from "../data";
import propTypes from "prop-types";
const Main = (props) => {
    return (
        <main>
            {data.posts.map((post) => {
                return <Post post={post} key={post.id} />;
            })}
        </main>
    );
};

Post.propTypes = {
    post: propTypes.object.isRequired
};




export default Main;