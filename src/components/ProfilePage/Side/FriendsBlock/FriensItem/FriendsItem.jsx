import React from 'react'
import Avatar from '../../../../UI/Avatar/Avatar'

import styles from './FriendsItem.module.scss'
import { Link } from 'react-router-dom'

const FriendsItem = ({ photo, name, userId }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__avatar}>
				{' '}
				<Link to={`/profile/${userId}`}>
					<Avatar photo={photo} size='50px' />
				</Link>
			</div>
			<div className={styles.item__name}>
				{' '}
				<Link to={`/profile/${userId}`}>{name.slice(0, 7)}</Link>
			</div>
		</div>
	)
}

export default FriendsItem
