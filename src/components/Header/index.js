import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from './style';
import { increaseCount, getCount } from '../../features/Posts/postsSlice';
const Header = () => {

    const dispatch = useDispatch();
    const count = useSelector(getCount);

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
            <button onClick={() => dispatch(increaseCount())}>
                {count}
            </button>
        </Container>
    )
}

export default Header;