import React from 'react'

import cn from './post.module.scss'
import Box from '../../UI/Box/Box'

const post = ({ post }) => {
	return (
		<article className={cn.post_item}>
			<Box>{post}</Box>
		</article>
	)
}

export default post
