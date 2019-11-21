import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = (props) => {
    const {component:Component, ...rest} = props;
    const isAuthenticated = !!Cookies.get('token');

    return <Route 
        {...rest}
        render = {(props) => isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
    />
}

export default PrivateRoute;