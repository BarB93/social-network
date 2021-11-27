import React from 'react'
import { Link } from 'react-router-dom'

import styles from './FriendsItem.module.scss'

const Info = ({ friend }) => {
	const status = friend.status ? friend.status : ''

	return (
		<div className={styles.friend__info}>
			<div className={styles.friend__name}>
				<Link to={`/profile/${friend.id}`}>{friend.name}</Link>
			</div>
			{status && <div className={styles.friend__status}>{status}</div>}
			<div className={styles.friend__message}>
				<Link to={`/dialogs/${friend.id}`}>Написать сообщение</Link>
			</div>
		</div>
	)
}

export default Info
