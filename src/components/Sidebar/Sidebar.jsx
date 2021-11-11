import React from 'react'

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
            </ul>
        </nav>
    )
}

export default Sidebar
