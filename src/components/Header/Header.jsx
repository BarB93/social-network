import React from 'react'
import Logo from './Logo'
import Container from '../UI/Container/Container'
import noAvatar from '../../assets/images/no_avatar.png'

import cn from './Header.module.scss'
import HeaderSettings from './HeaderSettings/HeaderSettings'

const Header = ({profile, isMenuOpen, toggleMenu, closeMenu}) => {

    return (
        <header className={cn.header}>
            <Container>
                <div className={cn.header__container}>
                    <Logo></Logo>
                    <HeaderSettings closeMenu={closeMenu} profile={profile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
                </div>
            </Container>
        </header>
    );
};

export default Header
