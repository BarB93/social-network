import React from 'react'

import { useSelector } from 'react-redux'
import PostItem from './PostItem'

const PostItemContainer = ({ post }) => {
	const profile = useSelector((state) => state.profile.profile)

	return <PostItem post={post} profile={profile} />
}

export default PostItemContainer
