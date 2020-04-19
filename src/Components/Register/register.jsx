import React, { Component } from 'react';
import api from "../services/api"

import { Container, ContainerFlex } from '../../Styles/register.jsx'

export default class Register extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        erros: [],
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        const { userName, email, password, erros } = this.state;

        if (userName.length <= 5) {
            erros.push('Min 5 caracters para usuário')

        }

        if (email.length <= 15) {
            erros.push('email errado')
        }

        if (password.length <= 10) {
            erros.push('Min 5 caracters para usuário')
        }

        this.setState({erros: erros})


        api.post('/users/register', { userName, email, password })
            .then((result) => {
                alert('Usuário cadastrado com sucesso')
            });




        //aqui reseta o input após realizar o cadastro
        this.setState({ userName: '', email: '', password: '' })

    }

    render() {
        const { userName, email, password, erros } = this.state;
        return (
            <Container>
                <h1>SIGNUP USER</h1>
                <input type="text" name="userName" value={userName} onChange={this.onChange} placeholder="User" minLength={5} ></input>
                <input type="text" name="email" value={email} onChange={this.onChange} placeholder="E-mail"></input>
                <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Password"></input>
                <button type="submit" onClick={() => this.onSubmit()}>REGISTER</button>
                {erros.map(erro => <p>{erro}</p>)}
                <ContainerFlex>
                    <p><a href="/">Login</a></p>
                    <p><a href="/forgot">Forgot</a></p>
                </ContainerFlex>
            </Container>
        )
    }
}
