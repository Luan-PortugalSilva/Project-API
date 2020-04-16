import React, { Component } from 'react';

import {Container, ContainerFlex} from  '../../Styles/pageapi.jsx'

class Api extends Component {
    render() {
        return (
            <Container>
                <h1>LOGIN WITH: </h1>
                <button type="submit">Facebook</button>
                <button type="submit">Google</button>

                <ContainerFlex>
                    <p><a href="/register">Register</a></p>
                    <p><a href="/forgot">Forgot</a></p>
                    <p><a href="/api">Api</a></p>
                </ContainerFlex>
            </Container>
        )
    }
}

export default Api
