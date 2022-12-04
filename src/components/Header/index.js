import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

const Header = () => {
    return (
        <Container>
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link className='link-page' to='/'>Home</Link></li>
                    <li><Link className='link-page' to='post'>Post</Link></li>
                    <li><Link className='link-page' to='user'>Users</Link></li>
                </ul>
            </nav>
        </Container>
    )
}

export default Header