import React from 'react'
import { useDispatch } from 'react-redux'

import { FaHeart, FaRegHeart } from 'react-icons/fa'

import cn from './LikeButton.module.scss'
import { toggleLikeToPost } from '../../../../../../redux/slices/profileSlice'

const LikeButton = ({ isLiked, postId, userId }) => {
	const dispatch = useDispatch()
	const classLiked = isLiked ? cn.liked : cn.notLiked

	const handleToggleLike = () => {
		dispatch(toggleLikeToPost({ postId, userId }))
	}

	return (
		<div
			className={`${cn.likeWrapper} ${classLiked}`}
			onClick={handleToggleLike}
		>
			<div className={cn.iconWrapper}>
				{isLiked && <FaHeart className={cn.IconLiked} />}
				{!isLiked && <FaRegHeart className={cn.IconNotLiked} />}
			</div>
			<button className={`${cn.likeButton}`}>Нравиться</button>
		</div>
	)
}

export default LikeButton
