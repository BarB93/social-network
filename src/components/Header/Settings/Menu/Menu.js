import React from 'react'
import Box from '../../../UI/Box/Box'

import cn from './Menu.module.scss'

const Menu = ({
	profile,
	imageURL,
	isMenuOpen,
	logout,
	closeOtherElements,
}) => {
	const handleClick = (e) => {
		e.stopPropagation()
		closeOtherElements()
	}

	const active = isMenuOpen

	const styleBox = {
		position: 'absolute',
		top: '100%',
		right: '0',
		minWidth: '200px',
		padding: '8px 0',
		transform: ' translateY(10px)',
		visibility: 'hidden',
		opacity: '0',
		transition:
			'opacity 200ms linear, transform 200ms linear, visibility 200ms linear',

		//active prop in styled-components
		active,
	}

	return (
		<Box {...styleBox} className={`${cn.menu} ${active}`} onClick={handleClick}>
			<div className={cn.menu__top}>
				<div className={cn.menu__img}>
					<img src={imageURL} alt="avatar" />
				</div>
				<div className={cn.menu__title}>
					<div className={cn.menu__name}>{profile.fullName}</div>
					<div className={cn.menu__userId}>Ваш id {profile.userId}</div>
				</div>
			</div>
			<div className={cn.menu__hr}></div>
			<ul className={cn.menu__list}>
				<li className={cn.menu__item}>Настройки</li>
				<div className={cn.menu__hr}></div>
				<li className={cn.menu__item} onClick={logout}>
					Выйти
				</li>
			</ul>
		</Box>
	)
}

export default Menu
