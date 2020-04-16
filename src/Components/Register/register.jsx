import React, { Component } from 'react';

import { Container, ContainerFlex } from '../../Styles/register.jsx'

class Register extends Component {
    render() {
        return (
            <Container>
                <h1>SIGNUP USER</h1>
                <input placeholder="User"></input>
                <input placeholder="E-mail"></input>
                <input placeholder="Password"></input>
                <input placeholder="Confirm your password"></input>
                <button type="submit">REGISTER</button>

                <ContainerFlex>
                    <p><a href="/">Login</a></p>
                    <p><a href="/forgot">Forgot</a></p>
                </ContainerFlex>
            </Container>
        )   
    }
}

export default Register