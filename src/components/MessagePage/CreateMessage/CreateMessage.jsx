import React, { useState } from 'react'

import cn from './CreateMessage.module.scss'

const CreateMessage = ({ addMessage }) => {
	const [message, setMessage] = useState('')
	const handleChangeMessage = (e) => {
		setMessage(e.target.value)
	}

	const handleAddMessage = () => {
		addMessage(message)
		setMessage('')
	}

	return (
		<div className={cn.create}>
			<input
				className={cn.create__input}
				type='text'
				placeholder='Напишите сообщение...'
				value={message}
				onChange={handleChangeMessage}
			/>
			<button onClick={handleAddMessage}>Отправить</button>
		</div>
	)
}

export default CreateMessage
