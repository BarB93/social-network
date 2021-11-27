import React from 'react'
import { Link } from 'react-router-dom'
import Box from '../../../../UI/Box/Box'

import styles from '../FriendsItem.module.scss'

const Menu = ({ friend, unfollow }) => {
	const styleBox = {
		position: 'absolute',
		top: '100%',
		right: '-25px',
		minWidth: '200px',
		padding: '5px 0',
		transform: ' translateY(10px)',
		visibility: 'hidden',
		opacity: '0',
		transition: 'opacity 200ms linear, transform 200ms linear, visibility 200ms linear',
	}

	return (
		<div className={styles.friend__icon}>
			<svg width='20' height='12'>
				<circle cy='6' cx='3' r='2' fill='currentColor' />
				<circle cy='6' cx='10' r='2' fill='currentColor' />
				<circle cy='6' cx='17' r='2' fill='currentColor' />
			</svg>
			<Box {...styleBox} className={styles.menu}>
				<div className={styles.menu__triangle} />
				<ul className={styles.menu__list}>
					<Link className={styles.menu__item} to={`/profile/${friend.id}`}>
						Посмотреть профиль
					</Link>
					<button className={styles.menu__item} onClick={unfollow}>
						Удалить из друзей
					</button>
				</ul>
			</Box>
		</div>
	)
}

export default Menu
