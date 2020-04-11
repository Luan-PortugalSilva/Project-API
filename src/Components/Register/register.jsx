import React from 'react';
import './register.css' 

export default Register => {
    return (
        <div className="background">
            <h1>SINGUP USER</h1>
                <input className="login" placeholder="User"></input>
                <input className="email" placeholder="E-mail"></input>
                <input className="password" placeholder="Password"></input>
                <input className="password" placeholder="Confirm your password"></input>
                <button type="submit">REGISTER</button>
<p>U have account? <a href='#'> LOGIN</a> </p>
                    
                </div>
    )
}