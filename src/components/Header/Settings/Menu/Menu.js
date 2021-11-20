import React from 'react'
import Box from '../../../UI/Box/Box'

import cn from './Menu.module.scss'
import { Link } from 'react-router-dom'

const Menu = ({
	profile,
	imageURL,
	isMenuOpen,
	toggleMenu,
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
					<Link to='/profile'>
						<img src={imageURL} alt='avatar' />
					</Link>
				</div>
				<div className={cn.menu__title}>
					<Link to='/profile'>
						<div className={cn.menu__name}>{profile.fullName}</div>
					</Link>
					<Link to='/profile'>
						<div className={cn.menu__userId}>Ваш id {profile.userId}</div>
					</Link>
				</div>
			</div>
			<ul className={cn.menu__list}>
				<Link to='/settings'>
					<li className={cn.menu__item} onClick={toggleMenu}>
						Настройки
					</li>
				</Link>
				<li className={cn.menu__item} onClick={logout}>
					Выйти
				</li>
			</ul>
		</Box>
	)
}

export default Menu
