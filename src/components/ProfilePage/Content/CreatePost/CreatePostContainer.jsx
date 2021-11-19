import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v1 as uuidv1 } from 'uuid'

import { addPost } from '../../../../redux/slices/profileSlice'
import CreatePost from './CreatePost'

const CreatePostContainer = () => {
	const dispatch = useDispatch()
	const { userId } = useSelector((state) => state.profile.profile)

	const handleAddPost = (text) => {
		const id = uuidv1()
		const post = {
			id,
			userId,
			text,
			date: Date.now(),
			usersIdLiked: [],
		}
		dispatch(addPost(post))
	}

	return <CreatePost addPost={handleAddPost} />
}

export default CreatePostContainer
