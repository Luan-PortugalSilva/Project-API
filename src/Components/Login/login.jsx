import React, { Component } from "react";
import api from "../services/api";
import { Container, ContainerFlex } from '../../Styles/login.jsx'

export default class Login extends Component {
   
    state = {
        email:'',
        password:'',
            }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })}
    
    onSubmit = (e) => {
        // get our form data out of state
        const { email, password } = this.state;
    
        api.post('/auth/login/', { email, password })
          .then((result) => {
                alert('Usuário logado com sucesso')
          });
          
      }
   
    render() {
    //desestruturando o objeto usuário  
    const { email, password } = this.state;

        return (
            <Container>
                <h1>LOGIN</h1>
                <input className="email" type="text" name="email" value={email} onChange={this.onChange} placeholder="E-mail"></input>
    <input className="password" type="password" name="password" value={password} onChange={this.onChange} placeholder="Password"></input>
    <button type="submit" onClick={()=>this.onSubmit()}>LOGIN</button>

                <ContainerFlex>
                    <p><a href="/register">Register</a></p>
                    <p><a href="/forgot">Forgot</a></p>
                </ContainerFlex>
            </Container>
        )
    }
}

