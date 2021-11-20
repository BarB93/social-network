import React from 'react'
import Avatar from '../../../../UI/Avatar/Avatar'

import cn from './FriendsItem.module.scss'
import { Link } from 'react-router-dom'

const FriendsItem = ({ photo, name, userId }) => {
	return (
		<div className={cn.item}>
			<div className={cn.item__avatar}>
				{' '}
				<Link to={`/profile/${userId}`}>
					<Avatar photo={photo} size='50px' />
				</Link>
			</div>
			<div className={cn.item__name}>
				{' '}
				<Link to={`/profile/${userId}`}>{name.slice(0, 7)}</Link>
			</div>
		</div>
	)
}

export default FriendsItem
