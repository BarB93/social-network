import React from 'react'

import cn from './FriendsItem.module.scss'

const FriendsItem = () => {
	return (
		<div className={cn.item}>
			<div className={cn.item__avatar}></div>
			<div className={cn.item__name}></div>
		</div>
	)
}

export default FriendsItem
