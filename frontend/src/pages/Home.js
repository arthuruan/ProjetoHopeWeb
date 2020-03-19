import React, { Component } from 'react';
import fire from '../base';

import '../styles/global.css';
import '../styles/App.css';
import '../styles/Loginbar.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            user: ''
        };
    }

    user (){
        const user = fire.auth().currentUser;
        this.setState({user});
    }

    componentDidMount() {
        this.user();
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>
                    Ola, {this.state.user.displayName}
                </h1>
                <button id="button" onClick={this.logout} type="submit">
                    Sair
                </button>
            </div>
        );
    }
}
