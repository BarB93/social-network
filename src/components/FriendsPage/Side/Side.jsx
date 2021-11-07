import React from 'react'
import Box from '../../UI/Box/Box'
import CustomLink from './CustomLink'

import cn from './Side.module.scss'

const Side = () => {
    return (
            <Box>
                <nav className={cn.menu}>
                    <ul className={cn.menu__list}>
                        <CustomLink to='/friends'>Мои друзья</CustomLink>
                        <CustomLink to='/friends/search'>Поиск друзей</CustomLink>
                    </ul>
                </nav>
            </Box>

    )
}

export default Side