import React, { Component } from 'react';
import fire from '../base';

import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/App.css';
import '../styles/Register.css';

import logo from '../icons/logo-hope.png';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: '',
          displayName: '',
          user: null,
          error: null,
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    signup = async (e) => {
        if(this.state.displayName && this.state.email && this.state.password){
            try {
                e.preventDefault();
                const userCredentials = await fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
                if (userCredentials.user) {
                    console.log(userCredentials.user);
                    await userCredentials.user.updateProfile({
                        displayName: this.state.displayName,
                    });
                }
            } catch (error) {
                console.log(error);
                this.setState({error: 'Email já existe ou está mal formatado!'});
            }
        }
    }

    render () {
        return (
            <div id="app">
                <main>
    
                    <div className="logo-container">
                        <img src={logo}/>
                        <font>
                            Crie sua conta
                        </font>
                    </div>
    
                    <form>
    
                        <div className="input-block">
                            <label htmlFor="nome_hope">Nome</label>
                            <input value={this.state.displayName} onChange={this.handleChange} type="displayName" name="displayName" id="displayName_hope"/>
                        </div>
    
                        <div className="input-block">
                            <label htmlFor="email_hope">Email</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email_hope"/>
                        </div>
    
                        <div className="input-block">
                            <label htmlFor="senha_hope">Senha</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="senha_hope"/>
                        </div>

                        <div className="error-block">
                            <font>{this.state.error}</font>
                        </div> 

                        <Link to="/">
                            <button onClick={this.signup} type="submit">CRIAR CONTA</button>
                        </Link>
                
                    </form>

                </main>   
            </div>
        );

    }
}