import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../../components/backend/Dashboard";
import Page403 from "../../components/errors/Page403";
import Page404 from "../../components/errors/Page404";
import Login from "../../components/frontend/auth/Login";
import Register from "../../components/frontend/auth/Register";

class FrontendLayout extends Component{
    render(){
        return (
            <Switch>
                <Route  path="/403" component={Page403}/>
                <Route  path="/404" component={Page404}/>
                <Route  path="/login" name="Login">
                      { localStorage.getItem('auth_token') ? <Redirect to="/" /> : <Login/>}
                </Route>
                <Route  path="/register" name="Register">
                      { localStorage.getItem('auth_token') ? <Redirect to="/" /> : <Register/>}
                </Route>
            </Switch>
        );
    }
}

export default FrontendLayout;