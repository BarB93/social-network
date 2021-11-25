import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v1 as uuidv1 } from 'uuid'

import { openCreatePost, closeCreatePost } from '../../../../redux/slices/profileSlice'
import CreatePost from './CreatePost'

const CreatePostContainer = ({ setPosts, posts }) => {
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
		const post = {
			id: uuidv1(),
			userId,
			text,
			date: Date.now(),
			usersIdLiked: [],
		}
		const newPosts = [...posts]
		newPosts.push(post)
		setPosts(newPosts)
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
