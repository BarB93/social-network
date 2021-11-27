import React from 'react'

import LikeButton from '../LikeButton/LikeButton'
import LikeCount from '../LikeCount/LikeCount'

import styles from './PostItemFooter.module.scss'

const PostItemFooter = ({ post, profile, toggleLike }) => {
	const isLiked = post.usersIdLiked.includes(profile.userId)
	const likesCount = post.usersIdLiked.length

	const handleToggleLike = () => {
		toggleLike({ postId: post.id, userId: profile.userId })
	}

	return (
		<div className={styles.footer}>
			<LikeButton isLiked={isLiked} toggleLike={handleToggleLike} />
			{likesCount > 0 && <LikeCount likesCount={likesCount} />}
		</div>
	)
}

export default PostItemFooter
