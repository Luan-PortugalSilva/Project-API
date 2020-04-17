import React, { Component } from 'react';
import api from "../services/api";

import { Container, ContainerFlex } from '../../Styles/register.jsx'

export default class Register extends Component {
    state = {
        userName:'',
        email:'',
        password:'',
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })}
    
    onSubmit = (e) => {
        // get our form data out of state
        const { userName,email, password } = this.state;
    
        api.post('/users/register', { userName, email, password })
          .then((result) => {
                alert('Usuário cadastrado com sucesso')
          });
          //aqui reseta o input após realizar o cadastro
          this.setState({userName:'', email:'', password:''})
          
      }

    render() {
        const { userName,email, password } = this.state;
        return (
            <Container>
                <h1>SIGNUP USER</h1>
                <input className="login" type="text" name="userName" value={userName} onChange={this.onChange} placeholder="User"></input>
                <input className="email" type="text" name="email" value={email} onChange={this.onChange} placeholder="E-mail"></input>
                <input className="password" type="password" name="password" value={password} onChange={this.onChange} placeholder="Password"></input>
                <button type="submit" onClick={()=>this.onSubmit()}>REGISTER</button>

                <ContainerFlex>
                    <p><a href="/">Login</a></p>
                    <p><a href="/forgot">Forgot</a></p>
                </ContainerFlex>
            </Container>
        )   
    }
}
