import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import styles from './Sidebar.module.scss'

const CustomLink = ({ children, to, end, ...props }) => {
	let resolved = useResolvedPath(to)

	let match = useMatch({ path: resolved.pathname, end: end !== undefined ? false : true })

	return (
		<li>
			<Link className={`${styles.menu__item} ${match ? styles.active : ''}`} to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}

export default CustomLink
