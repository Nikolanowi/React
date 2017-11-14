import React from "react";
import Footer from "./footer";
import Main from "./main";
import Header from "./header";
import About from "./about";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default App;