import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

const MyComponent = (props) => {
    return (
        <div>
            <h1>Hello </h1>
            <h2> {props.name}{props.lastname}</h2>
            <Child name="Ime 1"/>
            <Child name="Ime 2" slika = "kasjdhkajsdhaksj"/>
            
            
        </div>
    );
}

const Child = (props) => {

    return (
        <div>
            <h4>Recusion {props.name} {props.slika} </h4>
          
        </div>
    )
}


ReactDOM.render(<MyComponent name="Bla" lastname=" Bla bla" />, document.getElementById("app"));
