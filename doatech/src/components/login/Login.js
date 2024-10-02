import React from 'react'
import {FaUser, FaLock} from 'react-icons/fa';

import { useState } from 'react';

import "./Login.css";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os Dados:" + userName + " - " + password);
    };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div>
                <input type='email' placeholder='E-mail' onChange={(e) => setUserName(e.target.value)}></input>
                <FaUser className='icon' />
            </div>
            <div>
                <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}></input>
                <FaLock className='icon' />
            </div>

            <div className='recall-forget'>
                <label type="checkbox">
                    Lembre de mim
                </label>
                <a href='#'>Esqueceu a senha</a>
            </div>

            <button>Entrar</button>

            <div className='signup-link'>
                <p>Não tem uma conta? <a href='#'>Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login
