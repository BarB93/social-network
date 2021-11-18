import React from 'react'
import { Link } from 'react-router-dom'

import cn from './FriendsItem.module.scss'

const Info = ({ friend }) => {
	const status = friend.status ? friend.status : ''

	return (
		<div className={cn.friend__info}>
			<div className={cn.friend__name}>
				<Link to={`/profile/${friend.id}`}>{friend.name}</Link>
			</div>
			{status && <div className={cn.friend__status}>{status}</div>}
			<div className={cn.friend__message}>
				<Link to={`/dialogs/${friend.id}`}>Написать сообщение</Link>
			</div>
		</div>
	)
}

export default Info
