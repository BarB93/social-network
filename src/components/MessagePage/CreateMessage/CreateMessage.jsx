import React, { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

import styles from './CreateMessage.module.scss'

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
		<form className={styles.create}>
			<input
				className={styles.create__input}
				type='text'
				placeholder='Напишите сообщение...'
				value={message}
				onChange={handleChangeMessage}
			/>
			<button type='submit' className={styles.create__button} onClick={handleAddMessage}>
				<FaTelegramPlane className={styles.create__icon} />
			</button>
		</form>
	)
}

export default CreateMessage
