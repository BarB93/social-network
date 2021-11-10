import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

import cn from './Sidebar.module.scss'

const CustomLink = ({children, to, end, ...props}) => {
    let resolved = useResolvedPath(to)

    let match = useMatch({ path: resolved.pathname, end: end !== undefined ? false : true })

    return (
        <li>
            <Link
                className={`${cn.menu__item} ${match ?  cn.active : ''}`}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </li>
    )
}

export default CustomLink