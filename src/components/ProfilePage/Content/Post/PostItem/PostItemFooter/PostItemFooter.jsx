import React from 'react'

import LikeButton from '../LikeButton/LikeButton'
import LikeCount from '../LikeCount/LikeCount'

import cn from './PostItemFooter.module.scss'

const PostItemFooter = ({ post, profile }) => {
	const isLiked = post.usersIdLiked.includes(profile.userId)
	const likesCount = post.usersIdLiked.length
	return (
		<div className={cn.footer}>
			<LikeButton isLiked={isLiked} postId={post.id} userId={profile.userId} />
			{likesCount > 0 && <LikeCount likesCount={likesCount} />}
		</div>
	)
}

export default PostItemFooter
