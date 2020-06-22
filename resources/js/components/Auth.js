import React, { Component } from 'react';
import {Route,Redirect} from "react-router-dom";

//check and set user logged in or not
export const appAuth = {
    isAuthenticated: true,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        appAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
);