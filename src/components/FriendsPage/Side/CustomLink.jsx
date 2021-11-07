import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

import cn from './Side.module.scss'

const CustomLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <Link
            className={match ? `${cn.menu__item} ${cn.active}` : `${cn.menu__item}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}

export default CustomLink