import React from 'react'

import { useSelector } from 'react-redux'
import PostItem from './PostItem'

const PostItemContainer = ({ post, setPosts, posts }) => {
	const profile = useSelector((state) => state.profile.profile)

	const toggleLike = ({ postId, userId }) => {
		const newPosts = [...posts]
		newPosts.forEach((p) => {
			if (p.id === postId) {
				let isInclude = false
				p.usersIdLiked = p.usersIdLiked.filter((likeId) => {
					if (likeId === userId) isInclude = true
					return likeId !== userId
				})
				if (!isInclude) p.usersIdLiked.push(userId)
			}
		})
		setPosts(newPosts)
	}

	return <PostItem post={post} profile={profile} toggleLike={toggleLike} />
}

export default PostItemContainer
