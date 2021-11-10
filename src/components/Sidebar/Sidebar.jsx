import React from 'react'
import {FaCog, FaMusic, FaUserFriends, FaRegUserCircle, FaRegWindowRestore, FaRegComment} from "react-icons/fa";

import cn from './Sidebar.module.scss'
import CustomLink from './CustomLink'
import {routes} from '../../router/sidebarLinks'

const Sidebar = () => {
    return (
        <nav className={cn.menu}>
            <ul className={cn.menu__list}>
                {
                    routes.map(link => <CustomLink key={link.path} to={link.path} {...link.props}><link.icon className={cn.menu__icon}/>{link.title}</CustomLink>)
                }
                {/*<CustomLink to="/"><FaRegUserCircle className={cn.menu__icon}/>Моя страница</CustomLink>*/}
                {/*<CustomLink to="/news"><FaRegWindowRestore className={cn.menu__icon}/>Новости</CustomLink>*/}
                {/*<CustomLink to="/dialogs"><FaRegComment className={cn.menu__icon}/>Сообщения</CustomLink>*/}
                {/*<CustomLink to="/friends" end={false}><FaUserFriends className={cn.menu__icon}/>Друзья</CustomLink>*/}
                {/*<CustomLink to="/music"><FaMusic className={cn.menu__icon}/>Музыка</CustomLink>*/}
                {/*<CustomLink to="/settings"><FaCog className={cn.menu__icon}/>Настройки</CustomLink>*/}
            </ul>
        </nav>
    )
}

export default Sidebar
