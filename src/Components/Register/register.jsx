import React from 'react';


export default Register => {
    return (
        <div className="background">
            <form>
                <input className="login" placeholder="User"></input>
                <input className="password" placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}