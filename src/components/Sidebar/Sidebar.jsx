import React from 'react'
import {NavLink} from 'react-router-dom'

import cn from  './Sidebar.module.scss'

const Sidebar = (props) => {
    return (
            <div {...props}>
                <nav className={cn.menu}>
                    <ul className={cn.menu__list}>
                        <li className={cn.menu__item}><NavLink to="/">Новости</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Сообщения</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Друзья</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Музыка</NavLink></li>
                        <li className={cn.menu__item}><NavLink to="/">Настройки</NavLink></li>
                    </ul>
                </nav>
            </div>

    )
}

export default Sidebar
