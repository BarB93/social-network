import React from 'react'
import {Link} from 'react-router-dom'
import Box from '../../../../UI/Box/Box'

import cn from '../FriendsItem.module.scss'
import {position} from 'polished'


const Menu = ({friend, unfollow}) => {
    const styleBox = {
        position:'absolute',
        top:'100%',
        right:'-25px',
        minWidth: '200px',
        padding:'5px 0',
        transform:' translateY(10px)',
        visibility: 'hidden',
        opacity: '0',
        transition: 'opacity 200ms linear, transform 200ms linear, visibility 200ms linear',
    }

    return (
            <div className={cn.friend__icon}>
                <svg width='20' height='12'>
                    <circle cy='6' cx='3' r='2' fill='currentColor'/>
                    <circle cy='6' cx='10' r='2' fill='currentColor'/>
                    <circle cy='6' cx='17' r='2' fill='currentColor'/>
                </svg>
                <Box {...styleBox} className={cn.menu}>
                    <div className={cn.menu__triangle}/>
                    <ul className={cn.menu__list}>
                        <Link className={cn.menu__item} to={`/profile/${friend.id}`}>Посмотреть профиль</Link>
                        <a className={cn.menu__item} onClick={unfollow}>Удалить из друзей</a>
                    </ul>
                </Box>
            </div>
    )
}

export default Menu