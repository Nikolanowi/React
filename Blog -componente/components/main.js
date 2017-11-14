import React from "react";
import Post from "./post";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json()).then(result => {
                this.setState({ data: result });
            });

    }
    render() {
        return (
            <main style={{paddingTop:"0.5px"}}>
                        {
                    this.state.data.map((post) => {
                        return <Post post={post} key={post.id} />;
                    })}
            </main>
        );
    }
}


export default Main;