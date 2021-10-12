import React from 'react'
import {NavLink} from 'react-router-dom'

import cn from  './Sidebar.module.scss'

const Sidebar = (props) => {
    return (
                <nav className={cn.menu}>
                    <ul className={cn.menu__list}>
                        <li className={cn.menu__item}><NavLink to="/">Моя страница</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Новости</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Сообщения</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Друзья</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Музыка</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Настройки</NavLink></li>
                    </ul>
                </nav>
    )
}

export default Sidebar
