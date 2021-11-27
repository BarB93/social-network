import React, { useState } from 'react'

import { FaHeart, FaRegHeart } from 'react-icons/fa'

import styles from './LikeButton.module.scss'

const LikeButton = ({ isLiked, toggleLike }) => {
	const [isAnimate, setIsAnimate] = useState(false)
	const classLiked = isLiked ? styles.liked : styles.notLiked
	const classAnimation = isLiked && isAnimate ? styles.animation : ''

	const handleToggleLike = () => {
		toggleLike()
		if (!isAnimate) {
			setIsAnimate(true)
		}
	}

	return (
		<div
			className={`${styles.likeWrapper} ${classLiked} ${classAnimation}`}
			onClick={handleToggleLike}
		>
			<div className={styles.iconWrapper}>
				{isLiked && <FaHeart className={styles.IconLiked} />}
				{!isLiked && <FaRegHeart className={styles.IconNotLiked} />}
			</div>
			<button className={`${styles.likeButton}`}>Нравиться</button>
		</div>
	)
}

export default LikeButton
