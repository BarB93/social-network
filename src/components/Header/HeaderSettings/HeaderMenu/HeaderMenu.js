import React, {useEffect, useRef} from 'react'
import Box from '../../../UI/Box/Box'

import cn from './HeaderMenu.module.scss'

const HeaderMenu = ({profile, imageURL, isMenuOpen}) => {
    const active = isMenuOpen ? cn.active : ''

    const handleClick = (e) => {
        e.stopPropagation()
    }

    return (
        <Box onClick={handleClick} padding='0' className={cn.menu + ' ' + active}>
            <div className={cn.menu__top}>
                <div className={cn.menu__img}>
                    <img src={imageURL} alt="avatar"/>
                </div>
                <div className={cn.menu__title}>
                    <div className={cn.menu__name}>{profile.fullName}</div>
                    <div className={cn.menu__userId}>Ваш id {profile.userId}</div>
                </div>
            </div>
            <div className={cn.menu__hr}></div>
            <ul className={cn.menu__list}>
                <li className={cn.menu__item}>Настройки</li>
                <div className={cn.menu__hr}></div>
                <li className={cn.menu__item}>Выйти</li>
            </ul>
        </Box>
    )
}

export default HeaderMenu