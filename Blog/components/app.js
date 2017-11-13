import React from "react";
import data from "../data";

import Footer from "./footer";
import Main from "./main";
import Header from "./header";

class App extends React.Component {
    
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