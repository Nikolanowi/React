import React from "react";
import Footer from "./footer";
import Main from "./main";
import Header from "./header";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }

}

export default App;