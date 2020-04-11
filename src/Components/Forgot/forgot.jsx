import React from 'react';

import '../Forgot/forgot.css'

export default Forgot => {
    return (
        <div className="container">
            <h1>REMEMBER MY PASSWORD</h1>
            <input className="user" placeholder="E-mail"></input>
            <button type="submit" className="buttom-login">SEND E-MAIL</button>
            <p class='text-footer'>
WE WILL SEND AN SENT AN E-MAIL WITH THE LINK TO RECOVER YOUR PASSWORD</p>
            <div className="container-flex">
                <p><a href="/register" className="register-login">Login</a></p>
            </div>

        </div>
    )
}