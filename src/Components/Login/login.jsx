import React from 'react';

import '../Login/login.css'

export default Login => {
    return (
        <div className="container">
            <h1>LOGIN</h1>
            <input className="user" placeholder="User"></input>
            <input className="password" placeholder="password"></input>
            <button type="submit" className="buttom-login">LOGIN</button>

            <div className="container-flex">
                <p><a href="/register" className="register-login">Register</a></p>
                <p><a href="/forgot" className="forgot-login">Forgot</a></p>
            </div>

        </div>
    )
}