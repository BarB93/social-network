import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaCog, FaMusic, FaUserFriends, FaRegUserCircle, FaRegWindowRestore, FaRegComment} from "react-icons/fa";

import cn from './Sidebar.module.scss'

const Sidebar = () => {
    return (

        <nav className={cn.menu}>
            <ul className={cn.menu__list}>
                <li><NavLink className={cn.menu__item} className={({isActive}) => isActive ? `${cn.active} ${cn.menu__item}` : `${cn.menu__item}`} exact to="/"><FaRegUserCircle className={cn.menu__icon}/>Моя страница</NavLink></li>
                <li><NavLink className={cn.menu__item} className={({isActive}) => isActive ? `${cn.active} ${cn.menu__item}` : `${cn.menu__item}`} exact to="/news"><FaRegWindowRestore className={cn.menu__icon}/>Новости</NavLink></li>
                <li><NavLink className={cn.menu__item} className={({isActive}) => isActive ? `${cn.active} ${cn.menu__item}` : `${cn.menu__item}`}       to="/dialogs"><FaRegComment className={cn.menu__icon}/>Сообщения</NavLink></li>
                <li><NavLink className={cn.menu__item} className={({isActive}) => isActive ? `${cn.active} ${cn.menu__item}` : `${cn.menu__item}`}       to="/friends"><FaUserFriends className={cn.menu__icon}/>Друзья</NavLink></li>
                <li><NavLink className={cn.menu__item} className={({isActive}) => isActive ? `${cn.active} ${cn.menu__item}` : `${cn.menu__item}`} exact to="/music"><FaMusic className={cn.menu__icon}/>Музыка</NavLink></li>
                <li><NavLink className={cn.menu__item} className={({isActive}) => isActive ? `${cn.active} ${cn.menu__item}` : `${cn.menu__item}`} exact to="/settings"><FaCog className={cn.menu__icon}/>Настройки</NavLink></li>
            </ul>
        </nav>
    )
}

export default Sidebar
