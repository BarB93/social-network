import React from 'react'
import Box from '../../UI/Box/Box'
import CustomLink from '../../UI/CustomLink/CustomLink'

import cn from '../../UI/CustomLink/CustomLink.module.scss'

const Side = () => {
	return (
		<Box>
			<nav className={cn.menu}>
				<ul className={cn.menu__list}>
					<CustomLink to='/friends'>Мои друзья</CustomLink>
					<CustomLink to='/friends/search'>Поиск друзей</CustomLink>
				</ul>
			</nav>
		</Box>
	)
}

export default Side
