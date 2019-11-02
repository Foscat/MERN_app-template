import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from "./components/pages/Home"
import WorkBench from './components/pages/WorkBench';
import NoMatch from './components/pages/NoMatch';

import NavBar from "./components/parts/NavBar";

// This is the router for react page components
class App extends Component {
    render() {
        return (
            <div>
                {/* Allows navbar to stay on all pages */}
                <NavBar />
                <Router>
                    <div>
                        <Switch>
                            {/* 'exact path' is how you set up html page routes */}
                            <Route exact path="/" component={Home} />
                            {/* Workbench is for writing new code to keep new parts isolated for easier developing */}
                            <Route exact path="/workbench" component={WorkBench} />
                            {/* If no url routes match show error page */}
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;