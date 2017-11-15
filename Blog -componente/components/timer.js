import React from "react";
import { setInterval } from "timers";





class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { setTimer: "pending..." };

    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ setTimer: new Date().toString() });
        }, 1000);
    }

    render() {
        return (
            <h3 style={{ fontFamily: "Arial", color: "#782211", fontWeight: "bold", textAlign: "center" }}> {this.state.setTimer} </h3>

        );
    }
}




export default Timer;