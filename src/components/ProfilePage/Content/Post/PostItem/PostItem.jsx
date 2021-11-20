import React from 'react'
import Box from '../../../../UI/Box/Box'
import PostItemFooter from './PostItemFooter/PostItemFooter'

import cn from '../post.module.scss'
import Avatar from '../../../../UI/Avatar/Avatar'

const PostItem = ({ post, profile, imageURL }) => {
	const date = new Date(post.date)
	const today = new Date()
	let yesterday = (function (d) {
		d.setDate(d.getDate() - 1)
		return d
	})(new Date())

	const options = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}
	let postDate = date.toLocaleString('ru', options)
	postDate =
		date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
			? 'сегодня'
			: postDate
	postDate =
		date.setHours(0, 0, 0, 0) === yesterday.setHours(0, 0, 0, 0)
			? 'вчера'
			: postDate

	return (
		<Box className={cn.post}>
			<article>
				<div className={cn.post__header}>
					<Avatar photo={profile.photos?.small} margin='0 10px 0 0' />
					<div>
						<div className={cn.post__name}>{profile.fullName}</div>
						<div className={cn.post__date}>{postDate}</div>
					</div>
				</div>
				<div className={cn.post__text}>{post.text}</div>
				<PostItemFooter post={post} profile={profile} />
			</article>
		</Box>
	)
}

export default PostItem
