import React, { Component, useEffect } from 'react';
import fire from '../base';
import api from '../services/api';

// import '../styles/global.css';
import '../styles/App.css';
import '../styles/Home.css';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            user: '',
            cards: null,
        };
    }

    readCards = async () => {
        const response = await api.get('/');
        const cards = response.data.cards;

        this.setState({cards});
        console.log(this.state.cards);
    }

    user (){
        const user = fire.auth().currentUser;
        this.setState({user});
    }

    componentDidMount() {
        this.user();
        this.readCards();
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="container-row">
                <aside>
                    <h1>
                        Ola, { this.state.user && this.state.user.displayName }
                    </h1>
                    <button id="button" onClick={this.logout} type="submit">
                        Sair
                    </button>
                </aside>
                <div className="maincards">
                    <ul>
                        {this.state.cards && this.state.cards.map(card => (
                            <li className="card">
                                <header>{card.title}</header>
                                <p>{card.description}</p>
                            </li> 
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
