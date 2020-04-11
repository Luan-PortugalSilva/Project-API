import React from 'react';

import '../PageApi/api.css'

export default Api => {
    return (
        <div className="container">
            <h1>LOGIN WITH: </h1>
            <button type="submit" className="buttom-login">Facebook</button>
            <button type="submit" className="buttom-login">Google</button>

            <div className="container-flex">
                <p><a href="/register" className="register-login">Register</a></p>
                <p><a href="/forgot" className="forgot-login">Forgot</a></p>
                <p><a href="/api" className="forgot-login">Api</a></p>
            </div>
        </div>
    )
}
