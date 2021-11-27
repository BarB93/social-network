import React from 'react'

import styles from './Sidebar.module.scss'
import CustomLink from './CustomLink'
import { routes } from '../../router/sidebarLinks'

const Sidebar = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>
				{routes.map((link) => (
					<CustomLink key={link.path} to={link.path} {...link.props}>
						<link.icon className={styles.menu__icon} />
						{link.title}
					</CustomLink>
				))}
			</ul>
		</nav>
	)
}

export default Sidebar
