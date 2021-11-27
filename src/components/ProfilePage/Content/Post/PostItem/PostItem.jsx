import React from 'react'

import Box from '../../../../UI/Box/Box'
import Avatar from '../../../../UI/Avatar/Avatar'
import PostItemFooter from './PostItemFooter/PostItemFooter'
import { checkDate } from '../../../../../utils/checkDate'

import styles from '../post.module.scss'

const PostItem = ({ post, profile, toggleLike }) => {
	const date = new Date(post.date)
	const options = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}
	let postDate = date.toLocaleString('ru', options)
	postDate = checkDate(date, 'сегодня') ? 'сегодня' : postDate
	postDate = checkDate(date, 'вчера') ? 'вчера' : postDate

	return (
		<Box className={styles.post}>
			<article>
				<div className={styles.post__header}>
					<Avatar photo={profile.photos?.small} margin='0 10px 0 0' />
					<div>
						<div className={styles.post__name}>{profile.fullName}</div>
						<div className={styles.post__date}>{postDate}</div>
					</div>
				</div>
				<div className={styles.post__text}>{post.text}</div>
				<PostItemFooter toggleLike={toggleLike} post={post} profile={profile} />
			</article>
		</Box>
	)
}

export default PostItem
