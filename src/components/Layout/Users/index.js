import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectAllUsers } from '../../../features/Users/usersSlice';
import { Container } from '../style';
const Users = () => {
    const users = useSelector(selectAllUsers);
    
    const renderedUsers = users.map( user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
    ));

    return (
        <Container>
            <h2>Users</h2>
            <ul>{ renderedUsers }</ul>
        </Container>
    )
}

export default Users;