import React from 'react'
import Box from '../../../UI/Box/Box'

import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

const Menu = ({ profile, imageURL, isMenuOpen, toggleMenu, logout, closeOtherElements }) => {
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
		transition: 'opacity 200ms linear, transform 200ms linear, visibility 200ms linear',

		//active prop in styled-components
		active,
	}

	return (
		<Box {...styleBox} className={`${styles.menu} ${active}`} onClick={handleClick}>
			<div className={styles.menu__top}>
				<div className={styles.menu__img}>
					<Link to='/profile'>
						<img src={imageURL} alt='avatar' />
					</Link>
				</div>
				<div className={styles.menu__title}>
					<Link to='/profile'>
						<div className={styles.menu__name}>{profile.fullName}</div>
					</Link>
					<Link to='/profile'>
						<div className={styles.menu__userId}>Ваш id {profile.userId}</div>
					</Link>
				</div>
			</div>
			<ul className={styles.menu__list}>
				<Link to='/settings'>
					<li className={styles.menu__item} onClick={toggleMenu}>
						Настройки
					</li>
				</Link>
				<li className={styles.menu__item} onClick={logout}>
					Выйти
				</li>
			</ul>
		</Box>
	)
}

export default Menu
