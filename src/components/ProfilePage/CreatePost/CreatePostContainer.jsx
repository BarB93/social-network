import React from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../redux/slices/profileSlice'
import CreatePost from './CreatePost'

const CreatePostContainer = (props) => {
	const dispatch = useDispatch()

	const handleAddPost = (post) => {
		dispatch(addPost(post))
	}

	return <CreatePost addPost={handleAddPost} {...props} />
}

export default CreatePostContainer
