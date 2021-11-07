import React, {useEffect} from 'react'
import Logo from './Logo'
import Container from '../UI/Container/Container'
import SettingsContainer from './Settings/SettingsContainer'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMyProfile} from '../../redux/actions/myProfileAction'

import cn from './Header.module.scss'

const Header = () => {
    const dispatch =useDispatch()
    const {isAuth, userId} = useSelector(state => state.auth)

    useEffect(() => {
        if(isAuth) {
            dispatch(fetchMyProfile(userId))
        }
    },[userId])
    return (
        <header className={cn.header}>
            <Container>
                <div className={cn.header__container}>
                    <Logo></Logo>
                    <SettingsContainer />
                </div>
            </Container>
        </header>
    );
};

export default Header
