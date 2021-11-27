import React from 'react'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'
import Menu from './Menu/Menu'
import Avatar from './Avatar'
import Info from './Info'

import styles from './FriendsItem.module.scss'

const FriendsItem = ({ friend, follow, unfollow, isLoading }) => {
	const classUnfollowed = friend.followed ? '' : styles.unfollowed

	return (
		<li className={`${styles.friend} ${classUnfollowed}`}>
			<Avatar friend={friend} />
			<Info friend={friend} />
			<div className={styles.friend__dots}>
				{isLoading ? (
					<CircleLoader />
				) : friend.followed ? (
					<Menu friend={friend} unfollow={unfollow} />
				) : (
					<span className={styles.friend__cancel} onClick={follow}>
						Отмена
					</span>
				)}
			</div>
		</li>
	)
}

export default FriendsItem
