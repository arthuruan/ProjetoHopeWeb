import React from 'react';

import './global.css';
import './App.css';
import './Register.css';

import logo from './icons/logo-hope.png';

function Register() {
    return (
        <div id="app">
            <main>

                <div class="logo-block">
                    <img src={logo}/>
                </div>

                <form>

                    <div class="input-block">
                        <label htmlFor="nome_hope">Nome</label>
                        <input name="nome_hope" id="nome_hope"/>
                    </div>

                    <div class="input-block">
                        <label htmlFor="email_hope">Email</label>
                        <input name="email_hope" id="email_hope"/>
                    </div>

                    <div class="input-block">
                        <label htmlFor="senha_hope">Senha</label>
                        <input name="senha_hope" id="senha_hope"/>
                    </div>

                    <button type="submit">CRIAR CONTA</button>

                </form>
            </main>   
        </div>
    );
}

export default Register;