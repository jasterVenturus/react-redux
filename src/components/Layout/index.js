import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/index';
import { Container } from './style';
const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
};

export default Layout