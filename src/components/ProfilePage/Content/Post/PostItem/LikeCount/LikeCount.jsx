import React from 'react'
import { FaHeart } from 'react-icons/fa'
import cn from './LikeCount.module.scss'

const LikeCount = ({ likesCount }) => {
	return (
		<div className={cn.likes}>
			<div className={cn.iconWrapper}>
				<FaHeart className={cn.likesCount__icon} />
			</div>
			<div className={cn.likesCount}>{likesCount}</div>
		</div>
	)
}

export default LikeCount
