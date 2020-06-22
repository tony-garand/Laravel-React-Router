import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {appAuth,PrivateRoute} from './Auth';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Nav from './global/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
// protected route list
import Admin from './pages/admin/Admin';

// 
// var Router = require("react-router").Router;
// var Route = require("react-router").Route;
// var Switch = require("react-router").Switch;

export default class Index extends Component {

    render() {
        return (
            <div className="container">
                
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} />
                        <PrivateRoute path='/admin' component={Admin} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
