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
            <body>
                <Header />
                <Main />
                <Footer />
            </body>
        );
    }

}

export default App;