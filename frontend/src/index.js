//padrao
import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './Register';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Auth} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));