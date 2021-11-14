import React from 'react'
import { Link } from 'react-router-dom'
import noAvatar from '../../../../assets/images/no_avatar.png'

import cn from './FriendsItem.module.scss'

const Avatar = ({ friend }) => {
	const avatar = friend.photos.large ? friend.photos.large : noAvatar

	return (
		<div className={cn.friend__avatar}>
			<Link to={`/profile/${friend.id}`}>
				<img src={avatar} alt='avatar' />
			</Link>
		</div>
	)
}

export default Avatar
