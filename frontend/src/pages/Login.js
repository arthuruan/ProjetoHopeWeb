import React, { Component } from 'react';
import fire from '../base';

import '../styles/global.css';
import '../styles/App.css';
import '../styles/Loginbar.css';
import '../styles/MoreInfo.css';

import logo from '../icons/logo-hope.png';
import playstore from '../icons/playstore.png';
import appstore from '../icons/appstore.png';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  
  emailChange(e) {
    this.setState({ email: e.target.value });
  }
  
  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  login(e) {
    if(this.state.email || this.state.password) {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error) => {
        this.setState({error: 'CREDENCIAIS INVÁLIDAS!'});
        console.log(error);
      });
    }
  }

  render () {
    
    return (
      <div id="app">
        <main id="main">
  
            <div className="logo-container">
              <img src={logo}/>
              <font>
                  Project Hope
              </font>
            </div>
          
          <form>
  
            <div className="input-block">
              <label htmlFor="email_hope">Email</label>
              <input 
                value={this.state.email} 
                onChange={this.emailChange} 
                type="email" 
                name="emailhope" 
                id="email_hope"
              />
            </div>
            
            <div className="input-block">
              <label htmlFor="senha_hope">Senha</label>
              <input 
                value={this.state.password} 
                onChange={this.passwordChange} 
                type="password" 
                name="passwordhope" 
                id="senha_hope"
              />
            </div>
  
            <div className="forgot-block">
              <a href="/forgotPassword">ESQUECEU A SENHA?</a>
            </div>
  
            <button onClick={this.login} type="submit">ENTRAR</button>

            <div className="error-block">
              <font>{this.state.error}</font>
            </div>              
  
            <div className="register-block">
              <label htmlFor="register_hope">NÃO POSSUI CONTA?</label>
              <a href="/register">CRIAR</a>
            </div>
  
          </form>
  
        </main>
  
        <div id="container">
  
          <div className="box">
            <img src={playstore}/>
          </div>
  
          <div className="box">
            <img src={appstore}/>
          </div>
  
        </div>
  
      </div>
    );

  }
}