import React, { Component } from 'react';
import api from "../services/api";

import { Container } from '../../Styles/users.jsx'

export default class UsersList extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        this.LoadUsers()
    }
    LoadUsers = async () => {
        const response = await api.get(`/users`);
        const usernames = response.data.map(user => user);
        this.setState({ users: usernames })
    }



    render() {
        //desestruturando o objeto usuário  
        const { users } = this.state;

        return (

            <Container>
                <h1>Lista de Usários Cadastrados</h1>
                {users.map(users => <p key={users._id}>id: {users._id}<br /> Nome de usuário: {users.userName}<br /> E-mail: {users.email}</p>)}

            </Container>)
    }
}
