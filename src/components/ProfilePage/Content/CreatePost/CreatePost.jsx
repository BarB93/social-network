import React, { useState } from 'react'
import Box from '../../../UI/Box/Box'
import Button from '../../../UI/Button/Button'

import cn from './CreatePost.module.scss'

const CreatePost = ({ addPost }) => {
	const [postText, setPostText] = useState('')

	const isActiveCreatePost = postText.length > 0 ? cn.active : ''
	const isDisabledButton = postText.length < 1

	const handleChangePost = (e) => {
		setPostText(e.target.value)
	}

	const handleAddPost = () => {
		addPost(postText)
		setPostText('')
	}

	return (
		<Box margin={'10px 0'}>
			<div className={isActiveCreatePost}>
				<textarea
					className={cn.createPost__textarea}
					type='text'
					name='newPost'
					id='newPost'
					placeholder='Что у вас нового?'
					value={postText}
					onChange={handleChangePost}
				/>
				<div className={cn.createPost__wrapperButton}>
					<Button
						className={cn.createPost__button}
						w='min-content'
						disabled={isDisabledButton}
						onClick={handleAddPost}
					>
						Отправить
					</Button>
				</div>
			</div>
		</Box>
	)
}

export default CreatePost
