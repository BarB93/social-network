import React from 'react'
import {NavLink} from 'react-router-dom'

import {FaUserPlus} from 'react-icons/fa'
import cn from './user.module.scss'

const UserItem = ({user}) => {
    return (
        <div className={cn.user__item}>
            <NavLink to='/frends/77' className={cn.user__avatar}>
                <img className={cn.user__img} src='https://vk.com/images/camera_200.png' alt='avatar'/>
            </NavLink>
            <div className={cn.user__info}>
                <NavLink to='/frends/77' className={cn.user__name}>{user.fullName}</NavLink>
                <button className={cn.user__add}><FaUserPlus  className={cn.user__icon}/></button>
            </div>
        </div>
    )
}

export default UserItem