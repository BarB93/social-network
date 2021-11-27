import React from 'react'
import PostItemContainer from './PostItem/PostItemContainer'

import styles from './post.module.scss'

const PostList = ({ posts, setPosts }) => {
	const postItems = posts
		.slice()
		.reverse()
		.map((p, index) => <PostItemContainer key={index} post={p} setPosts={setPosts} posts={posts} />)

	return <div styles={styles.post_list}>{postItems}</div>
}

export default PostList
