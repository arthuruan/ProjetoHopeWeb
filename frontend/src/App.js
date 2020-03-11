import React from 'react';

import './global.css';
import './App.css';
import './Loginbar.css';

import logo from './icons/logo-hope.png';

function App() {
  return (
    <div id="app">
      <main>

          <div class="logo-block">
            <img src={logo}/>
          </div>
        
        <form>

          <div class="input-block">
            <label htmlFor="email_hope">Email</label>
            <input name="email_hope" id="email_hope"/>
          </div>
          
          <div class="input-block">
            <label htmlFor="senha_hope">Senha</label>
            <input name="senha_hope" id="senha_hope"/>
          </div>

          <div class="forgot-block">
            <a href="forgot">ESQUECEU A SENHA?</a>
          </div>

          <button type="submit">ENTRAR</button>

          <div class="register-block">
            <label htmlFor="register_hope">NÃO POSSUI CONTA?</label>
            <a href="register">CRIAR</a>
          </div>

        </form>

      </main>
    </div>
  );
}

export default App;
