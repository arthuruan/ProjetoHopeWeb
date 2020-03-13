import React, { Component } from 'react';
import fire from './base';

import './global.css';
import './App.css';
import './Loginbar.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <button id="button" onClick={this.logout} type="submit">
                    Sair
                </button>
            </div>
        );
    }
}
