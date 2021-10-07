import React from 'react'
import Logo from './Logo'
import Container from '../UI/Container/Container'

import cn from './Header.module.scss'

const Header = (props) => {
    return (

        <header {...props} className={cn.header}>
            <Container>
                <Logo></Logo>
            </Container>
        </header>
    );
};

export default Header
