import React from 'react'

import Box from '../../UI/Box/Box'
import CustomLink from '../../UI/CustomLink/CustomLink'

import styles from '../../UI/CustomLink/CustomLink.module.scss'

const Side = () => {
	return (
		<Box>
			<nav className={styles.menu}>
				<ul className={styles.menu__list}>
					<CustomLink to='/settings'>Все настройки</CustomLink>
					<CustomLink to='main'>Обо мне</CustomLink>
					<CustomLink to='work'>Работа</CustomLink>
					<CustomLink to='contacts'>Контакты</CustomLink>
				</ul>
			</nav>
		</Box>
	)
}

export default Side
