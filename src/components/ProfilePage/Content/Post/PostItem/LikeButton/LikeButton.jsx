import React, { useState } from 'react'

import { FaHeart, FaRegHeart } from 'react-icons/fa'

import cn from './LikeButton.module.scss'

const LikeButton = ({ isLiked, toggleLike }) => {
	const [isAnimate, setIsAnimate] = useState(false)
	const classLiked = isLiked ? cn.liked : cn.notLiked
	const classAnimation = isLiked && isAnimate ? cn.animation : ''

	const handleToggleLike = () => {
		toggleLike()
		if (!isAnimate) {
			setIsAnimate(true)
		}
	}

	return (
		<div className={`${cn.likeWrapper} ${classLiked} ${classAnimation}`} onClick={handleToggleLike}>
			<div className={cn.iconWrapper}>
				{isLiked && <FaHeart className={cn.IconLiked} />}
				{!isLiked && <FaRegHeart className={cn.IconNotLiked} />}
			</div>
			<button className={`${cn.likeButton}`}>Нравиться</button>
		</div>
	)
}

export default LikeButton
