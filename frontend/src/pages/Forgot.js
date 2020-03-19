import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../icons/logo-hope.png';
import fire from '../base';

import '../styles/Forgotbar.css';

export default class Forgot extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
        this.state = {
          email: '',
          error: null,
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    resetPassword(e) {
        e.preventDefault();
        fire.auth().sendPasswordResetEmail(this.state.email).then((u) => {
        }).catch((error) => {
            this.setState({error: 'EMAIL INVÁLIDO!'});
            console.log(error);
        });
    }

    render() {
        return (
            <div id="app">
                <main>

                    <div className="logo-container">
                        <img src={logo}/>
                        <font>
                            Redefina sua senha
                        </font>
                    </div>

                    <div className="input-container">
                        
                        <label>
                            Digite seu Email da sua conta de usuário e 
                            enviaremos um link de redefinição de senha.
                        </label>
                        
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email_hope"/>
                    
                    </div>

                    <div className="error-block">
                        <font>{this.state.error}</font>
                    </div>  

                    <div className="buttons">
                        <button onClick={this.resetPassword}>ENVIAR EMAIL</button>
                    </div>

                </main>
            </div>
        );
    }
}
