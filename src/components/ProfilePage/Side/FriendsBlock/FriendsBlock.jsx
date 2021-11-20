import React from 'react'

import FriendsItem from './FriensItem/FriendsItem'
import Box from '../../../UI/Box/Box'
import HeaderBlock from './HeaderBlock/HeaderBlock'

import cn from './FriendsBlock.module.scss'

const FriendsBlock = ({ friends, friendsCount }) => {
	const friendsList = friends.map((f) => (
		<FriendsItem
			key={f.id}
			photo={f.photos?.small}
			name={f.name}
			userId={f.id}
		/>
	))

	return (
		<Box>
			<HeaderBlock friendsCount={friendsCount} />
			<div className={cn.friendsList}>{friendsList}</div>
		</Box>
	)
}

export default FriendsBlock
