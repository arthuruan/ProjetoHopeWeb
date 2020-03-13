import React, { Component } from 'react';
import fire from './base';

import './global.css';
import './App.css';
import './Loginbar.css';
import './MoreInfo.css';

import logo from './icons/logo-hope.png';
import playstore from './icons/playstore.png';
import appstore from './icons/appstore.png';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
    });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
    });
  }

  render () {
    
    return (
      <div id="app">
        <main id="main">
  
            <div class="logo-block">
              <img src={logo}/>
            </div>
          
          <form>
  
            <div class="input-block">
              <label htmlFor="email_hope">Email</label>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email_hope"/>
            </div>
            
            <div class="input-block">
              <label htmlFor="senha_hope">Senha</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="senha_hope"/>
            </div>
  
            <div class="forgot-block">
              <a href="forgot">ESQUECEU A SENHA?</a>
            </div>
  
            <button onClick={this.login} type="submit">ENTRAR</button>
  
            <div class="register-block">
              <label htmlFor="register_hope">NÃO POSSUI CONTA?</label>
              <a href="register">CRIAR</a>
            </div>
  
          </form>
  
        </main>
  
        <div id="container">
  
          <div class="box">
            <img src={playstore}/>
          </div>
  
          <div class="box">
            <img src={appstore}/>
          </div>
  
        </div>
  
      </div>
    );

  }
}