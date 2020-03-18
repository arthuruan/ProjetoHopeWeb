import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import Register from './Register';

export default class routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Auth} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
  }
}
