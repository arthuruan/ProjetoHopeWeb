import React, { Component } from 'react';

import Login from '../pages/Login';
import fire from '../base';
import Home from '../pages/Home';

export default class auth extends Component {

    constructor () {
        super();
        this.state = ({
            user : null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount () {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.user ? (<Home/>) : (<Login/>)}
            </div>
        );
    }
}
