import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v1 as uuidv1 } from 'uuid'

import {
	addPost,
	openCreatePost,
	closeCreatePost,
} from '../../../../redux/slices/profileSlice'
import CreatePost from './CreatePost'

const CreatePostContainer = () => {
	const createPostRef = useRef()
	const dispatch = useDispatch()
	const {
		profile: { userId },
		isOpenCreatePost,
	} = useSelector((state) => state.profile)

	const handleOpenCreatePost = () => {
		dispatch(openCreatePost())
	}

	const handleCloseCreatePost = () => {
		dispatch(closeCreatePost())
	}

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

	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath())
		if (!path.includes(createPostRef.current)) {
			handleCloseCreatePost()
		}
	}

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick)
		return () => {
			document.body.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	return (
		<CreatePost
			ref={createPostRef}
			addPost={handleAddPost}
			isOpenCreatePost={isOpenCreatePost}
			openCreatePost={handleOpenCreatePost}
		/>
	)
}

export default CreatePostContainer
