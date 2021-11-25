import React from 'react'
import PostItemContainer from './PostItem/PostItemContainer'

import cn from './post.module.scss'

const PostList = ({ posts, setPosts }) => {
	const postItems = posts
		.slice()
		.reverse()
		.map((p, index) => <PostItemContainer key={index} post={p} setPosts={setPosts} posts={posts} />)

	return <div cn={cn.post_list}>{postItems}</div>
}

export default PostList
