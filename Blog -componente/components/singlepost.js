import React from "react";


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
            <div style={{ paddingTop: "10px",textAlign:"center"}}>

                <h2 style={{backgroundColor: "#782211", color: "#F8EFE5" }}> {this.state.data.title} </h2>
                <h3 style={{backgroundColor: "#F8EFE5"}}>Author name: | {this.state.data.userId} |</h3>
                <h4> {this.state.data.body}</h4>


            </div >

        );


    }
}


export default Singlepost;

