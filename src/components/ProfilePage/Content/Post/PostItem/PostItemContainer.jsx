import React from 'react'

import { useSelector } from 'react-redux'
import PostItem from './PostItem'

import noAvatar from '../../../../../assets/images/no_avatar.png'

const PostItemContainer = ({ post }) => {
	const profile = useSelector((state) => state.profile.profile)
	const imageURL = profile?.photos.small ? profile.photos.small : noAvatar

	return <PostItem post={post} profile={profile} imageURL={imageURL} />
}

export default PostItemContainer
