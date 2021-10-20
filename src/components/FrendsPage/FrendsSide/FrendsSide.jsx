import React from 'react'
import Box from '../../UI/Box/Box'
import {NavLink} from "react-router-dom";

import cn from './FrendsSide.module.scss'

const FrendsSide = () => {
    return (
            <Box>
                <nav className={cn.menu}>
                    <ul className={cn.menu__list}>
                        <NavLink to='/frends' exact  className={cn.menu__item} activeClassName={cn.active}>Мои друзья</NavLink>
                        <NavLink to='/frends/search' exact className={cn.menu__item} activeClassName={cn.active}>Поиск друзей</NavLink>
                    </ul>
                </nav>
            </Box>

    )
}

export default FrendsSide