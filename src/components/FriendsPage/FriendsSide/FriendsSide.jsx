import React from 'react'
import Box from '../../UI/Box/Box'
import {NavLink} from "react-router-dom";

import cn from './FriendsSide.module.scss'

const FriendsSide = () => {
    return (
            <Box>
                <nav className={cn.menu}>
                    <ul className={cn.menu__list}>
                        <NavLink to='/friends' exact  className={cn.menu__item} activeClassName={cn.active}>Мои друзья</NavLink>
                        <NavLink to='/friends/search' exact className={cn.menu__item} activeClassName={cn.active}>Поиск друзей</NavLink>
                    </ul>
                </nav>
            </Box>

    )
}

export default FriendsSide