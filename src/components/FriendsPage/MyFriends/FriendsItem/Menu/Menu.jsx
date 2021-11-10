import React from 'react'
import {Link} from 'react-router-dom'
import Box from '../../../../UI/Box/Box'

import cn from '../FriendsItem.module.scss'


const Menu = ({friend, unfollow}) => {
    return (
            <div className={cn.friend__icon}>
                <svg width='20' height='12'>
                    <circle cy='6' cx='3' r='2' fill='currentColor'/>
                    <circle cy='6' cx='10' r='2' fill='currentColor'/>
                    <circle cy='6' cx='17' r='2' fill='currentColor'/>
                </svg>
                <Box padding='5px 0' className={cn.menu}>
                    <ul className={cn.menu__list}>
                        <Link className={cn.menu__item} to={`/profile/${friend.id}`}>Посмотреть профиль</Link>
                        <a className={cn.menu__item} onClick={unfollow}>Удалить из друзей</a>
                    </ul>
                    <div className={cn.menu__triangle}/>
                </Box>
            </div>
    )
}

export default Menu