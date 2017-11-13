import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

const Dog = (props) => {

    return (
        <h1>Dog</h1>

    )
}

const Fish = () => {
    return (
        <h1>Fish</h1>
    )
}


const House = (props) => {
    let pet = [];
    const p = parseInt(props.area);

    if (p > 50) {
        pet.push(<Dog/>) ;
    } else {

        for (let i = 0; i <= 20; i++) {
        pet.push( <Fish/>);
    }

    return (
        <div>House: {pet}</div>
        
    );


}

ReactDOM.render(<House area="30" />, document.getElementById("app"));