import React, { Component } from "react";

import { Container, ContainerFlex } from '../../Styles/login.jsx'

class Login extends Component {
    render() {
        return (
            <Container>
                <h1>LOGIN</h1>
                <input placeholder="User"></input>
                <input placeholder="password"></input>
                <button type="submit">LOGIN</button>

                <ContainerFlex>
                    <p><a href="/register">Register</a></p>
                    <p><a href="/forgot">Forgot</a></p>
                    <p><a href="/api">Api</a></p>
                </ContainerFlex>
            </Container>
        )
    }
}


export default Login