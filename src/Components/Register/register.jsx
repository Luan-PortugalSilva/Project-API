import React from 'react';
import './register.css'

export default Register => {
    return (
        <div className="background">
            <h1>SIGNUP USER</h1>
            <input className="login" placeholder="User"></input>
            <input className="email" placeholder="E-mail"></input>
            <input className="password" placeholder="Password"></input>
            <input className="password" placeholder="Confirm your password"></input>
            <button type="submit">REGISTER</button>

            <div className="container-flex">
                <p><a href="/" className="register-register">Login</a></p>
                <p><a href="/forgot" className="forgot-register">Forgot</a></p>
            </div>

        </div>
    )
}