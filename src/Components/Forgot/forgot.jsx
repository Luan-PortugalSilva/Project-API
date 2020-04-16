import React, { Component } from 'react';

import { Container, ContainerFlex } from '../../Styles/forgot.jsx'

class Forgot extends Component {
    render() {
        return (
            <Container>
                <h1>REMEMBER MY PASSWORD</h1>
                <input placeholder="E-mail"></input>
                <button type="submit" >SEND E-MAIL</button>
                <p class='text-footer'>
                    WE WILL SEND AN SENT AN E-MAIL WITH THE LINK TO RECOVER YOUR PASSWORD</p>
                <ContainerFlex>
                    <p><a href="/">Login</a></p>
                    </ContainerFlex>
            </Container>
        )
    }
}

export default Forgot