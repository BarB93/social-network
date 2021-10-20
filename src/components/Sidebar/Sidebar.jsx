import React from 'react'
import {NavLink} from 'react-router-dom'

import {FaRegUserCircle} from 'react-icons/fa'
import cn from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <nav className={cn.menu}>
            <ul className={cn.menu__list}>
                <li><NavLink className={cn.menu__item} activeClassName={cn.menu__item_active} exact to="/"><FaRegUserCircle className={cn.menu__icon}/>Моя страница</NavLink></li>
                <li><NavLink className={cn.menu__item} activeClassName={cn.menu__item_active} exact to="/news">Новости</NavLink></li>
                <li><NavLink className={cn.menu__item} activeClassName={cn.menu__item_active}       to="/dialogs">Сообщения</NavLink></li>
                <li><NavLink className={cn.menu__item} activeClassName={cn.menu__item_active}       to="/frends">Друзья</NavLink></li>
                <li><NavLink className={cn.menu__item} activeClassName={cn.menu__item_active} exact to="/music">Музыка</NavLink></li>
                <li><NavLink className={cn.menu__item} activeClassName={cn.menu__item_active} exact to="/settings">Настройки</NavLink></li>
            </ul>
        </nav>
    )
}

export default Sidebar
