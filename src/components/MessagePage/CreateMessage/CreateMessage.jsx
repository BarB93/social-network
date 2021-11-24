import React, { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

import cn from './CreateMessage.module.scss'

const CreateMessage = ({ addMessage }) => {
	const [message, setMessage] = useState('')
	const handleChangeMessage = (e) => {
		setMessage(e.target.value)
	}

	const handleAddMessage = (e) => {
		e.preventDefault()
		if (message.trim().length > 0) {
			addMessage(message)
			setMessage('')
		}
	}

	return (
		<form className={cn.create}>
			<input
				className={cn.create__input}
				type='text'
				placeholder='Напишите сообщение...'
				value={message}
				onChange={handleChangeMessage}
			/>
			<button type='submit' className={cn.create__button} onClick={handleAddMessage}>
				<FaTelegramPlane className={cn.create__icon} />
			</button>
		</form>
	)
}

export default CreateMessage
