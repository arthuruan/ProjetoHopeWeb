import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Register from './pages/Register';
import forgotPassword from './pages/Forgot';
import Home from './pages/Home';
import Login from './pages/Login';

export default class routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Auth} />
                <Route path="/register" component={Register} />
                <Route path="/forgotPassword" component={forgotPassword} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
  }
}
