import React, { Component } from 'react';
import api from "../services/api"
import * as yup from 'yup';
import { Container, ContainerFlex } from '../../Styles/register.jsx'

export default class Register extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        userErro:[],
        emailErro: [],
        passErro: []
    }

    onChange = (e) => {
        const { userName, email, password, userErro } = this.state;
        this.setState({ [e.target.name]: e.target.value })

        if (e.target.userName.length <=5){
            this.setState({userErro:['Digite no mínimo 5 caracter']})
        }
        else if (e.target.userName!==null){
            this.setState({userErro:['']})
        }
    }

    onSubmit = (e) => {
        const { userName, email, password } = this.state;
        api.post('/users/register', { userName, email, password })
            .then((result) => {
                alert('Usuário cadastrado com sucesso')
            });
        //aqui reseta o input após realizar o cadastro
        this.setState({ userName: '', email: '', password: '' })
    }

    render() {
        const { userName, email, password, userErro } = this.state;
        return (
            <Container>
                <h1>SIGNUP USER</h1>
                <input type="text" name="userName" value={userName} onChange={this.onChange} placeholder="User" minLength={5} >
                </input>{userErro.map(erro=><p>{erro}</p>)}
                <input type="email" name="email" value={email} onChange={this.onChange} placeholder="E-mail"></input>
                <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Password"></input>
                <button type="submit" onClick={() => this.onSubmit()}>REGISTER</button>
                <ContainerFlex>
                    <p><a href="/">Login</a></p>
                    <p><a href="/forgot">Forgot</a></p>
                </ContainerFlex>
            </Container>
        )
    }
}
