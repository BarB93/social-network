import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import styles from './CustomLink.module.scss'

const CustomLink = ({ children, to, ...props }) => {
	let resolved = useResolvedPath(to)
	let match = useMatch({ path: resolved.pathname, end: true })

	return (
		<Link
			className={match ? `${styles.menu__item} ${styles.active}` : `${styles.menu__item}`}
			to={to}
			{...props}
		>
			{children}
		</Link>
	)
}

export default CustomLink
