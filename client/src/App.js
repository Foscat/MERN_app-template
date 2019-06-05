import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from "./components/pages/Home"
import NoMatch from './components/pages/NoMatch';

// This is the router for react page components
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            {/* 'exact path' is how you set up html page routes */}
                            <Route exact path="/" component={Home} />
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