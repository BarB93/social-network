import React, { useState } from 'react'
import Box from '../../../UI/Box/Box'
import Button from '../../../UI/Button/Button'

import styles from './CreatePost.module.scss'

const CreatePost = React.forwardRef(({ addPost, isOpenCreatePost, openCreatePost }, ref) => {
	const [postText, setPostText] = useState('')

	const isActiveCreatePost = postText.length > 0 || isOpenCreatePost ? styles.active : ''
	const isDisabledButton = postText.length < 1

	const handleChangePost = (e) => {
		setPostText(e.target.value)
	}

	const handleAddPost = () => {
		addPost(postText)
		setPostText('')
	}

	return (
		<form ref={ref} className={isActiveCreatePost}>
			<Box margin={'10px 0'}>
				<textarea
					className={styles.createPost__textarea}
					type='text'
					name='newPost'
					id='newPost'
					placeholder='Что у вас нового?'
					value={postText}
					onFocus={openCreatePost}
					onChange={handleChangePost}
				/>
				<div className={styles.createPost__wrapperButton}>
					<Button
						className={styles.createPost__button}
						w='min-content'
						disabled={isDisabledButton}
						onClick={handleAddPost}
					>
						Отправить
					</Button>
				</div>
			</Box>
		</form>
	)
})

CreatePost.displayName = 'CreatePost'

export default CreatePost
