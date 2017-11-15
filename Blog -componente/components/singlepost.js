import React from "react";
import Post from "./post";
import Main from "./main";

class Singlepost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };

    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(result => result.json()).then(result => {
                this.setState({ data: result });
                console.log(result);
            });

    }
    render() {
        console.log(this.props);
        if (!this.state.data) {
            return "loading";
        }
        return (
            <div>

                <h3> {this.state.data.title}</h3>
                <h3>Author name{this.state.data.userId}</h3>
                <h3> {this.state.data.body}</h3>


            </div >

        );


    }
}


export default Singlepost;

